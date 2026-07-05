-- 1. Private schema for internal SECURITY DEFINER helpers (NOT exposed via the Data API)
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated;

-- 2. Recreate has_role inside the private schema so it is unreachable via PostgREST
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated;

-- 3. Recreate the leads admin-read policy against the private helper
DROP POLICY IF EXISTS "Admins can view all leads" ON public.leads;
CREATE POLICY "Admins can view all leads"
ON public.leads
FOR SELECT
TO authenticated
USING (private.has_role(auth.uid(), 'admin'));

-- Explicitly deny direct client inserts (leads are saved server-side via the service role)
DROP POLICY IF EXISTS "No client inserts on leads" ON public.leads;
CREATE POLICY "No client inserts on leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (false);

-- 4. Restrict user_roles modifications to admins only (prevents privilege escalation)
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (private.has_role(auth.uid(), 'admin'))
WITH CHECK (private.has_role(auth.uid(), 'admin'));

-- 5. Remove the publicly-executable SECURITY DEFINER function from the exposed schema
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);