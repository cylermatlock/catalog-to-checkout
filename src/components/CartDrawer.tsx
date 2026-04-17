import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { productImages } from "@/data/productImages";
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Step = "cart" | "checkout" | "success";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clear, itemCount } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    notes: "",
  });

  const handleClose = (open: boolean) => {
    if (!open) {
      closeCart();
      // reset to cart view after close animation
      setTimeout(() => setStep((s) => (s === "success" ? "cart" : s)), 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in name, email, and phone.");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("quote_requests").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim() || null,
        address: form.address.trim() || null,
        notes: form.notes.trim() || null,
        items: items.map((i) => ({
          id: i.product.id,
          name: i.product.name,
          sku: i.product.sku,
          quantity: i.quantity,
          price: i.product.price ?? null,
        })),
      });
      if (error) throw error;
      clear();
      setForm({ name: "", email: "", phone: "", company: "", address: "", notes: "" });
      setStep("success");
    } catch (err) {
      console.error(err);
      toast.error("Could not submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display uppercase tracking-tight flex items-center gap-2">
            {step === "checkout" && (
              <button onClick={() => setStep("cart")} className="hover:text-primary">
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            {step === "cart" && <>Your Quote Request ({itemCount})</>}
            {step === "checkout" && <>Request Quote</>}
            {step === "success" && <>Request Submitted</>}
          </SheetTitle>
        </SheetHeader>

        {step === "cart" && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground gap-3">
                <ShoppingCart className="w-12 h-12 opacity-30" />
                <p>Your quote request is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3">
                  {items.map((item) => {
                    const image = productImages[item.product.id];
                    return (
                      <div
                        key={item.product.id}
                        className="flex gap-3 p-3 border border-border rounded-md"
                      >
                        <div className="w-16 h-16 bg-secondary rounded flex-shrink-0 overflow-hidden">
                          {image && (
                            <img
                              src={image}
                              alt={item.product.name}
                              className="w-full h-full object-contain p-1"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold leading-tight line-clamp-2">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            SKU: {item.product.sku}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-7 w-7"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-7 w-7"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-muted-foreground hover:text-destructive"
                              aria-label="Remove"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <Button
                    className="w-full font-display uppercase"
                    size="lg"
                    onClick={() => setStep("checkout")}
                  >
                    Request Quote
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-xs text-muted-foreground"
                    onClick={clear}
                  >
                    Clear quote request
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {step === "checkout" && (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3">
              <div>
                <Label htmlFor="name">Full name *</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="address">Shipping address</Label>
                <Textarea
                  id="address"
                  rows={2}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  rows={3}
                  placeholder="Anything else we should know?"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                {itemCount} item{itemCount !== 1 ? "s" : ""} in this request
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <Button
                type="submit"
                className="w-full font-display uppercase"
                size="lg"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-6">
            <CheckCircle2 className="w-16 h-16 text-primary" />
            <h3 className="font-display text-xl uppercase">Thank you!</h3>
            <p className="text-sm text-muted-foreground">
              Your quote request has been received. Our team will reach out to you shortly at the email or phone number you provided.
            </p>
            <Button onClick={() => handleClose(false)} className="mt-2">
              Continue browsing
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
