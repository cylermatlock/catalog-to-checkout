import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { LogOut, RefreshCw, Mail, FileText, AlertCircle } from "lucide-react";

interface QuoteRequest {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  address: string | null;
  notes: string | null;
  items: any;
}

interface EmailLog {
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
}

type Range = "24h" | "7d" | "30d" | "all";

const rangeToDate = (r: Range) => {
  if (r === "all") return null;
  const d = new Date();
  if (r === "24h") d.setHours(d.getHours() - 24);
  if (r === "7d") d.setDate(d.getDate() - 7);
  if (r === "30d") d.setDate(d.getDate() - 30);
  return d.toISOString();
};

const statusColor = (s: string) => {
  if (s === "sent") return "bg-green-500/15 text-green-700 dark:text-green-400";
  if (s === "pending") return "bg-blue-500/15 text-blue-700 dark:text-blue-400";
  if (s === "suppressed") return "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400";
  return "bg-red-500/15 text-red-700 dark:text-red-400";
};

const Admin = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [emails, setEmails] = useState<EmailLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState<Range>("30d");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [templateFilter, setTemplateFilter] = useState<string>("all");
  const [openQuote, setOpenQuote] = useState<QuoteRequest | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/auth", { replace: true });
        return;
      }
      setUserEmail(data.session.user.email ?? "");
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!roles) {
        setChecking(false);
        setIsAdmin(false);
        return;
      }
      setIsAdmin(true);
      setChecking(false);
    })();
  }, [navigate]);

  const load = async () => {
    setLoading(true);
    try {
      const since = rangeToDate(range);
      let q = supabase.from("quote_requests").select("*").order("created_at", { ascending: false });
      if (since) q = q.gte("created_at", since);
      const { data: qData, error: qErr } = await q;
      if (qErr) throw qErr;
      setQuotes((qData ?? []) as QuoteRequest[]);

      let e = supabase
        .from("email_send_log")
        .select("message_id, template_name, recipient_email, status, error_message, created_at")
        .order("created_at", { ascending: false })
        .limit(500);
      if (since) e = e.gte("created_at", since);
      const { data: eData, error: eErr } = await e;
      if (eErr) throw eErr;
      setEmails((eData ?? []) as EmailLog[]);
    } catch (err: any) {
      toast.error(err.message ?? "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, range]);

  // Deduplicate by message_id (latest status wins; data is already desc)
  const dedupedEmails = useMemo(() => {
    const seen = new Set<string>();
    const out: EmailLog[] = [];
    for (const e of emails) {
      const key = e.message_id ?? `${e.recipient_email}-${e.created_at}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(e);
    }
    return out;
  }, [emails]);

  const templateNames = useMemo(() => {
    return Array.from(new Set(dedupedEmails.map((e) => e.template_name))).sort();
  }, [dedupedEmails]);

  const filteredEmails = useMemo(() => {
    return dedupedEmails.filter((e) => {
      if (statusFilter !== "all" && e.status !== statusFilter) return false;
      if (templateFilter !== "all" && e.template_name !== templateFilter) return false;
      return true;
    });
  }, [dedupedEmails, statusFilter, templateFilter]);

  const stats = useMemo(() => {
    const total = dedupedEmails.length;
    const sent = dedupedEmails.filter((e) => e.status === "sent").length;
    const failed = dedupedEmails.filter((e) => ["dlq", "failed", "bounced"].includes(e.status)).length;
    const suppressed = dedupedEmails.filter((e) => e.status === "suppressed").length;
    return { total, sent, failed, suppressed };
  }, [dedupedEmails]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <h1 className="font-display text-2xl uppercase">Access denied</h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Your account ({userEmail}) does not have admin access. Ask an existing admin to grant you the admin role.
        </p>
        <Button variant="outline" onClick={signOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl uppercase tracking-tight">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">{userEmail}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={load} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold">Time range:</span>
          {(["24h", "7d", "30d", "all"] as Range[]).map((r) => (
            <Button
              key={r}
              size="sm"
              variant={range === r ? "default" : "outline"}
              onClick={() => setRange(r)}
            >
              {r === "24h" ? "Last 24h" : r === "7d" ? "7 days" : r === "30d" ? "30 days" : "All time"}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Total emails" value={stats.total} />
          <StatCard label="Sent" value={stats.sent} tone="green" />
          <StatCard label="Failed" value={stats.failed} tone="red" />
          <StatCard label="Suppressed" value={stats.suppressed} tone="yellow" />
        </div>

        <Tabs defaultValue="quotes">
          <TabsList>
            <TabsTrigger value="quotes">
              <FileText className="w-4 h-4 mr-2" />
              Quote Requests ({quotes.length})
            </TabsTrigger>
            <TabsTrigger value="emails">
              <Mail className="w-4 h-4 mr-2" />
              Email Log ({filteredEmails.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead className="text-right">Items</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotes.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          No quote requests in this range
                        </TableCell>
                      </TableRow>
                    )}
                    {quotes.map((q) => {
                      const itemCount = Array.isArray(q.items) ? q.items.length : 0;
                      return (
                        <TableRow
                          key={q.id}
                          className="cursor-pointer"
                          onClick={() => setOpenQuote(q)}
                        >
                          <TableCell className="text-xs whitespace-nowrap">
                            {new Date(q.created_at).toLocaleString()}
                          </TableCell>
                          <TableCell className="font-medium">{q.name}</TableCell>
                          <TableCell>{q.company ?? "—"}</TableCell>
                          <TableCell className="text-xs">{q.email}</TableCell>
                          <TableCell className="text-xs">{q.phone}</TableCell>
                          <TableCell className="text-right">{itemCount}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emails" className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="dlq">Failed (DLQ)</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="suppressed">Suppressed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Select value={templateFilter} onValueChange={setTemplateFilter}>
                <SelectTrigger className="w-[260px]">
                  <SelectValue placeholder="Template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All templates</SelectItem>
                  {templateNames.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>Template</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Error</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEmails.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                          No emails match these filters
                        </TableCell>
                      </TableRow>
                    )}
                    {filteredEmails.slice(0, 200).map((e, i) => (
                      <TableRow key={`${e.message_id}-${i}`}>
                        <TableCell className="text-xs whitespace-nowrap">
                          {new Date(e.created_at).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-xs">{e.template_name}</TableCell>
                        <TableCell className="text-xs">{e.recipient_email}</TableCell>
                        <TableCell>
                          <Badge className={statusColor(e.status)} variant="outline">
                            {e.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs text-destructive max-w-[280px] truncate">
                          {e.error_message ?? ""}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={!!openQuote} onOpenChange={(o) => !o && setOpenQuote(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Quote Request — {openQuote?.name}</DialogTitle>
          </DialogHeader>
          {openQuote && (
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Submitted" value={new Date(openQuote.created_at).toLocaleString()} />
                <Field label="Company" value={openQuote.company ?? "—"} />
                <Field label="Email" value={openQuote.email} />
                <Field label="Phone" value={openQuote.phone} />
              </div>
              {openQuote.address && <Field label="Address" value={openQuote.address} />}
              {openQuote.notes && <Field label="Notes" value={openQuote.notes} />}
              <div>
                <div className="text-xs uppercase text-muted-foreground mb-2">Items</div>
                <div className="space-y-2">
                  {(Array.isArray(openQuote.items) ? openQuote.items : []).map((item: any, idx: number) => (
                    <div key={idx} className="border border-border rounded p-2 text-xs">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-muted-foreground">
                        SKU: {item.sku} · Qty: {item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const StatCard = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "green" | "red" | "yellow";
}) => {
  const color =
    tone === "green"
      ? "text-green-600 dark:text-green-400"
      : tone === "red"
      ? "text-red-600 dark:text-red-400"
      : tone === "yellow"
      ? "text-yellow-600 dark:text-yellow-400"
      : "";
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xs uppercase text-muted-foreground font-normal">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-display ${color}`}>{value}</div>
      </CardContent>
    </Card>
  );
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs uppercase text-muted-foreground">{label}</div>
    <div>{value}</div>
  </div>
);

export default Admin;
