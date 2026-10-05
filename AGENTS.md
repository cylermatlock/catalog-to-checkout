# Project architecture

- Store downloaded catalog photos with Lovable Assets and import their `.asset.json` pointers; this keeps binary media out of the repository while preserving stable product URLs.
- The quote catalog (catalog.json) points Lovable Asset photos at repo copies in public/catalog-assets/<asset_id>/<file>; outside tools read the GitHub repo and can't reach the asset host, so every new asset photo must also be copied there.
