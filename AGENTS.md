# Project architecture

- Store downloaded catalog photos with Lovable Assets and import their `.asset.json` pointers; this keeps binary media out of the repository while preserving stable product URLs.- The quote catalog (catalog.json) rewrites Lovable Asset photo URLs to a public storage mirror (product-gallery/catalog-assets/<asset_id>/<file>); outside tools can't reach the website's asset host, so every new asset photo must also be uploaded there.
