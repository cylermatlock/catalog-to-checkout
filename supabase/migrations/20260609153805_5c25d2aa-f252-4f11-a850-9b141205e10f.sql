
-- 1. Lock down quote_requests reads/updates/deletes explicitly to service_role
CREATE POLICY "Service role can read quote requests" ON public.quote_requests
  FOR SELECT USING (auth.role() = 'service_role');
CREATE POLICY "Service role can update quote requests" ON public.quote_requests
  FOR UPDATE USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "Service role can delete quote requests" ON public.quote_requests
  FOR DELETE USING (auth.role() = 'service_role');

-- 2. Lock down EXECUTE on email queue SECURITY DEFINER functions to service_role only,
--    and set fixed search_path on each.
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;

ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;

-- 3. Add explicit write restrictions to product-gallery storage bucket (service_role only)
CREATE POLICY "Service role can upload product gallery" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'product-gallery' AND auth.role() = 'service_role');
CREATE POLICY "Service role can update product gallery" ON storage.objects
  FOR UPDATE USING (bucket_id = 'product-gallery' AND auth.role() = 'service_role')
  WITH CHECK (bucket_id = 'product-gallery' AND auth.role() = 'service_role');
CREATE POLICY "Service role can delete product gallery" ON storage.objects
  FOR DELETE USING (bucket_id = 'product-gallery' AND auth.role() = 'service_role');
