# Deploys dist/ to Cloudflare Pages using the phb credential snapshot,
# without disturbing any other Cloudflare login on this machine.
#
# One-time setup: log in as binorimedia@gmail.com (npx wrangler login),
# then snapshot the credentials:
#   Copy-Item "$env:USERPROFILE\.wrangler\config\default.toml" "$env:USERPROFILE\.wrangler-phb\default.toml"
$ErrorActionPreference = 'Stop'
$store = "$env:USERPROFILE\.wrangler\config\default.toml"
$snap  = "$env:USERPROFILE\.wrangler-phb\default.toml"
$hold  = "$env:TEMP\wrangler-hold-$PID.toml"

if (-not (Test-Path $snap)) {
  Write-Error "No phb credential snapshot at $snap. See setup note at the top of deploy.ps1."
  exit 1
}

$hadOther = Test-Path $store
if ($hadOther) { Copy-Item $store $hold -Force }
New-Item -ItemType Directory -Force (Split-Path $store) | Out-Null
Copy-Item $snap $store -Force
try {
  npx --yes wrangler pages deploy
  $code = $LASTEXITCODE
  # wrangler may have rotated the OAuth token — keep the snapshot fresh
  Copy-Item $store $snap -Force
} finally {
  if ($hadOther) { Copy-Item $hold $store -Force; Remove-Item $hold -Force -ErrorAction SilentlyContinue }
  elseif (Test-Path $store) { Remove-Item $store -Force }
}
exit $code
