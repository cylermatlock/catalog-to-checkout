insert into storage.buckets (id, name, public) values ('product-gallery', 'product-gallery', true) on conflict (id) do nothing;

create policy "Public read product gallery"
on storage.objects for select
using (bucket_id = 'product-gallery');