param(
  [switch]$Minify
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$esbuild = 'D:\桌面\文件和文档\网页高铁沙盘\node_modules\@esbuild\win32-x64\esbuild.exe'

if (-not (Test-Path $esbuild)) {
  throw "esbuild not found: $esbuild"
}

$arguments = @(
  (Join-Path $root 'src\main.js'),
  '--bundle',
  '--format=iife',
  '--target=chrome100',
  '--legal-comments=none',
  ('--outfile=' + (Join-Path $root 'js\app.bundle.js'))
)

if ($Minify) { $arguments += '--minify' }

Push-Location $root
try {
  & $esbuild @arguments
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
  $bundle = Get-Item (Join-Path $root 'js\app.bundle.js')
  Write-Host ("BUILD OK  {0:N1} KB  {1}" -f ($bundle.Length / 1KB), $bundle.FullName)
} finally {
  Pop-Location
}
