import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  created_at: string;
}

export const getLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<Lead[]> => {
    const { supabase, userId } = context;

    const { data: isAdmin, error: roleError } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });

    if (roleError) {
      console.error("[getLeads] role check failed:", roleError.message);
      throw new Error("Could not verify permissions");
    }

    if (!isAdmin) {
      throw new Error("Forbidden");
    }

    const { data, error } = await supabase
      .from("leads")
      .select("id, name, email, phone, service, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[getLeads] query failed:", error.message);
      throw new Error("Could not load leads");
    }

    return (data ?? []) as Lead[];
  });
