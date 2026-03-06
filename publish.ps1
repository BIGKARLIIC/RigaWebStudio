param(
  [string]$Message = "",
  [switch]$NoPush
)

$ErrorActionPreference = "Stop"

function Fail($Text) {
  Write-Error $Text
  exit 1
}

git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  Fail "This directory is not a git repository."
}

$gitName = git config --get user.name
$gitEmail = git config --get user.email

if ([string]::IsNullOrWhiteSpace($gitName) -or [string]::IsNullOrWhiteSpace($gitEmail)) {
  Fail "Git user.name and user.email are not set. Run: git config --global user.name \"Your Name\" and git config --global user.email \"you@example.com\""
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git add -A

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "No changes to commit."
  exit 0
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) {
  Fail "Commit failed."
}

if ($NoPush) {
  Write-Host "Commit created. Push skipped because -NoPush was used."
  exit 0
}

$origin = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($origin)) {
  Fail "No 'origin' remote is configured. Add one with: git remote add origin <github-repo-url>"
}

git push -u origin HEAD
if ($LASTEXITCODE -ne 0) {
  Fail "Push failed."
}

Write-Host "Push complete."
