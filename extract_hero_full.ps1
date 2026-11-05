$content = Get-Content 'c:\laragon\www\laravel_project\nifglobalghatkopar\old_design\index.html' -Raw
$idx = $content.IndexOf('Ananya-Panday-Celebrity-min.png.webp')
if ($idx -gt 0) {
    $start = [Math]::Max(0, $idx - 3000)
    $sub = $content.Substring($start, 3500)
    Set-Content 'c:\laragon\www\laravel_project\nifglobalghatkopar\hero_full_snippet.txt' $sub
    Write-Host "Length: $($sub.Length)"
}

