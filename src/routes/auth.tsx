import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gem, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Login — Diamond Clean NH" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        if (data.session) {
          toast.success("Account created. You're signed in.");
          navigate({ to: "/admin" });
        } else {
          toast.success(
            "Account created. Check your inbox to confirm your email, then sign in.",
          );
          setMode("signin");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate({ to: "/admin" });
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-secondary/40 px-4 py-24">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-card">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Gem className="h-6 w-6 text-primary" strokeWidth={2.2} />
          </span>
          <h1 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground">
            {mode === "signin" ? "Admin Login" : "Create Admin Account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Access your contact-form leads.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={6}
              autoComplete={
                mode === "signin" ? "current-password" : "new-password"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full rounded-full font-bold"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          {mode === "signin" ? (
            <>
              First time here?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="font-semibold text-primary hover:underline"
              >
                Create your account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signin")}
                className="font-semibold text-primary hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </p>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
