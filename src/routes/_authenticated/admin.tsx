import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getLeads } from "@/lib/leads.functions";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Loader2,
  LogOut,
  RefreshCw,
  Inbox,
  Mail,
  Phone,
  Search,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Leads — Diamond Clean NH Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function AdminPage() {
  const navigate = useNavigate();
  const fetchLeads = useServerFn(getLeads);
  const [search, setSearch] = useState("");

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["admin-leads"],
    queryFn: () => fetchLeads(),
    retry: false,
  });

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = search.trim().toLowerCase();
    if (!q) return data;
    return data.filter((l) =>
      [l.name, l.email, l.phone, l.service, l.message]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(q)),
    );
  }, [data, search]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const isForbidden =
    error instanceof Error && error.message.includes("Forbidden");

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
            Contact Leads
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data ? `${data.length} total submission${data.length === 1 ? "" : "s"}` : "Loading submissions…"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            disabled={isFetching}
            className="rounded-full"
          >
            <RefreshCw
              className={isFetching ? "h-4 w-4 animate-spin" : "h-4 w-4"}
            />
            Refresh
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="rounded-full"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>

      {isForbidden ? (
        <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-12 text-center">
          <ShieldAlert className="h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-xl font-bold text-foreground">
            No admin access
          </h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            This account isn't authorized to view leads. Sign in with the admin
            email to continue.
          </p>
          <Button onClick={handleSignOut} className="mt-6 rounded-full">
            Switch account
          </Button>
        </div>
      ) : (
        <>
          <div className="relative mt-6 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, service…"
              className="pl-9"
            />
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
            {isLoading ? (
              <div className="flex items-center justify-center gap-2 p-16 text-sm text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading leads…
              </div>
            ) : error ? (
              <div className="p-12 text-center text-sm text-destructive">
                Could not load leads. Please try refreshing.
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-16 text-center text-muted-foreground">
                <Inbox className="h-10 w-10" />
                <p className="mt-3 text-sm">
                  {search
                    ? "No leads match your search."
                    : "No submissions yet."}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Received</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((lead) => (
                      <TableRow key={lead.id} className="align-top">
                        <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                          {formatDate(lead.created_at)}
                        </TableCell>
                        <TableCell className="font-semibold text-foreground">
                          {lead.name}
                        </TableCell>
                        <TableCell className="text-sm">
                          <a
                            href={`mailto:${lead.email}`}
                            className="flex items-center gap-1.5 text-primary hover:underline"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            {lead.email}
                          </a>
                          {lead.phone && (
                            <a
                              href={`tel:${lead.phone}`}
                              className="mt-1 flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                            >
                              <Phone className="h-3.5 w-3.5" />
                              {lead.phone}
                            </a>
                          )}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {lead.service || "—"}
                        </TableCell>
                        <TableCell className="max-w-xs text-sm text-foreground/80">
                          <span className="line-clamp-3 whitespace-pre-wrap">
                            {lead.message}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
