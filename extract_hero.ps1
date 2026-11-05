$content = Get-Content 'c:\laragon\www\laravel_project\nifglobalghatkopar\old_design\index.html' -Raw
$idx = $content.IndexOf('STUDENT SATISFACTION')
if ($idx -gt 0) {
    $start = [Math]::Max(0, $idx - 5000)
    $sub = $content.Substring($start, 5000)
    Set-Content 'c:\laragon\www\laravel_project\nifglobalghatkopar\hero_snippet.txt' $sub
    Write-Host "Length: $($sub.Length)"
}

