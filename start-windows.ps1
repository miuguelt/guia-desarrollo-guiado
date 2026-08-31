# Script de lanzamiento para Guía: Desarrollo Guiado por IA
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = 'Stop'

$Port = 8148
$Url = "http://localhost:$Port"

Write-Host "═════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host " 🚀 GUÍA MAESTRA: DESARROLLO GUIADO POR IA (PUERTO $Port)" -ForegroundColor Yellow
Write-Host " Pipeline: Gemini Gems ➔ Google Stitch ➔ Google AI Studio ➔ Supabase" -ForegroundColor Magenta
Write-Host "═════════════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host " Iniciando servidor web estático en $Url..." -ForegroundColor Green

# Abrir el navegador tras 1 segundo
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 2
    Start-Process "http://localhost:8148"
} | Out-Null

# Arrancar servidor con npx serve o fallback con Python
if (Get-Command npx -ErrorAction SilentlyContinue) {
    npx serve -l $Port "$PSScriptRoot"
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
    Set-Location "$PSScriptRoot"
    python -m http.server $Port
} else {
    Write-Warning "Ni Node/npx ni Python están disponibles en PATH. Abre index.html directamente en tu navegador."
    Start-Process (Join-Path $PSScriptRoot "index.html")
}
