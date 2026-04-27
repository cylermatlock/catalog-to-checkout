import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

type LogEntry = {
  id: number;
  level: "log" | "info" | "warn" | "error";
  message: string;
  time: string;
};

type ViteError = {
  id: number;
  message: string;
  file?: string;
  time: string;
};

let logSeq = 0;
const nowTime = () => new Date().toLocaleTimeString();

const Diagnostics = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [viteErrors, setViteErrors] = useState<ViteError[]>([]);
  const [mountedAt] = useState(() => new Date());
  const [reactOk] = useState(true);
  const [routerOk, setRouterOk] = useState(false);
  const [appRootHasContent, setAppRootHasContent] = useState(false);
  const [tick, setTick] = useState(0);
  const origRef = useRef<Partial<Record<LogEntry["level"], (...a: unknown[]) => void>>>({});

  // Patch console to capture logs/errors live
  useEffect(() => {
    const levels: LogEntry["level"][] = ["log", "info", "warn", "error"];
    levels.forEach((lvl) => {
      const orig = console[lvl].bind(console);
      origRef.current[lvl] = orig;
      console[lvl] = (...args: unknown[]) => {
        try {
          const message = args
            .map((a) => {
              if (a instanceof Error) return `${a.name}: ${a.message}`;
              if (typeof a === "object") {
                try { return JSON.stringify(a); } catch { return String(a); }
              }
              return String(a);
            })
            .join(" ");
          setLogs((prev) => [
            ...prev.slice(-199),
            { id: ++logSeq, level: lvl, message, time: nowTime() },
          ]);
        } catch { /* ignore */ }
        orig(...args);
      };
    });

    const onError = (e: ErrorEvent) => {
      setLogs((prev) => [
        ...prev.slice(-199),
        {
          id: ++logSeq,
          level: "error",
          message: `${e.message}${e.filename ? ` (${e.filename}:${e.lineno})` : ""}`,
          time: nowTime(),
        },
      ]);
    };
    const onRej = (e: PromiseRejectionEvent) => {
      setLogs((prev) => [
        ...prev.slice(-199),
        {
          id: ++logSeq,
          level: "error",
          message: `Unhandled rejection: ${String(e.reason)}`,
          time: nowTime(),
        },
      ]);
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRej);

    // Vite HMR error hook
    const hot = (import.meta as unknown as { hot?: { on: (e: string, cb: (p: { err: { message: string; id?: string } }) => void) => void } }).hot;
    if (hot) {
      hot.on("vite:error", (payload) => {
        setViteErrors((prev) => [
          ...prev,
          {
            id: ++logSeq,
            message: payload?.err?.message ?? "Unknown Vite error",
            file: payload?.err?.id,
            time: nowTime(),
          },
        ]);
      });
    }

    return () => {
      levels.forEach((lvl) => {
        const orig = origRef.current[lvl];
        if (orig) console[lvl] = orig;
      });
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRej);
    };
  }, []);

  // Periodic health checks
  useEffect(() => {
    const check = () => {
      setRouterOk(typeof window !== "undefined" && !!window.location);
      const root = document.getElementById("root");
      setAppRootHasContent(!!root && root.children.length > 0);
      setTick((t) => t + 1);
    };
    check();
    const id = setInterval(check, 2000);
    return () => clearInterval(id);
  }, []);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const hardReload = useCallback(() => {
    // Bust cache
    const url = new URL(window.location.href);
    url.searchParams.set("_t", Date.now().toString());
    window.location.replace(url.toString());
  }, []);

  const errorCount = logs.filter((l) => l.level === "error").length + viteErrors.length;
  const warnCount = logs.filter((l) => l.level === "warn").length;

  const StatusPill = ({ ok, label }: { ok: boolean; label: string }) => (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
      {ok ? (
        <CheckCircle2 className="w-4 h-4 text-primary" />
      ) : (
        <XCircle className="w-4 h-4 text-destructive" />
      )}
      <span className="text-sm font-medium">{label}</span>
      <Badge variant={ok ? "secondary" : "destructive"} className="ml-auto">
        {ok ? "OK" : "FAIL"}
      </Badge>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <Helmet>
        <title>Preview Diagnostics</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-5xl mx-auto space-y-6">
        <header className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold">Preview Diagnostics</h1>
            <p className="text-sm text-muted-foreground">
              Mounted {mountedAt.toLocaleTimeString()} · Checks: {tick}
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={reload} variant="default">
              <RefreshCw className="w-4 h-4" /> Reload Preview
            </Button>
            <Button onClick={hardReload} variant="outline">
              Hard Reload (cache-bust)
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <StatusPill ok={reactOk} label="React mounted" />
          <StatusPill ok={routerOk} label="Router available" />
          <StatusPill ok={appRootHasContent} label="#root has content" />
          <StatusPill ok={errorCount === 0 && viteErrors.length === 0} label={`${errorCount} errors`} />
        </section>

        <section className="rounded-lg border border-border bg-card p-4">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Vite Errors
            <Badge variant={viteErrors.length ? "destructive" : "secondary"}>
              {viteErrors.length}
            </Badge>
          </h2>
          {viteErrors.length === 0 ? (
            <p className="text-sm text-muted-foreground">No Vite errors received since this page mounted.</p>
          ) : (
            <ul className="space-y-2 text-sm font-mono">
              {viteErrors.map((e) => (
                <li key={e.id} className="rounded bg-destructive/10 text-destructive p-2">
                  <div className="text-xs opacity-70">{e.time}</div>
                  <div className="whitespace-pre-wrap">{e.message}</div>
                  {e.file && <div className="text-xs opacity-70 mt-1">{e.file}</div>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold flex items-center gap-2">
              Console Logs
              <Badge variant="secondary">{logs.length}</Badge>
              {errorCount > 0 && <Badge variant="destructive">{errorCount} err</Badge>}
              {warnCount > 0 && <Badge>{warnCount} warn</Badge>}
            </h2>
            <Button size="sm" variant="ghost" onClick={() => setLogs([])}>
              Clear
            </Button>
          </div>
          {logs.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No console output captured yet. Logs from now on will appear here.
            </p>
          ) : (
            <div className="max-h-96 overflow-auto rounded bg-muted/30 p-2 text-xs font-mono space-y-1">
              {logs.map((l) => (
                <div
                  key={l.id}
                  className={
                    l.level === "error"
                      ? "text-destructive"
                      : l.level === "warn"
                      ? "text-foreground/80"
                      : "text-muted-foreground"
                  }
                >
                  <span className="opacity-60">[{l.time}]</span>{" "}
                  <span className="uppercase">{l.level}</span> · {l.message}
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="text-xs text-muted-foreground">
          Visit <code>/diagnostics</code> any time. This page captures errors only after it mounts —
          if the app root is blank, navigate here directly to surface what loaded.
        </p>
      </div>
    </div>
  );
};

export default Diagnostics;
