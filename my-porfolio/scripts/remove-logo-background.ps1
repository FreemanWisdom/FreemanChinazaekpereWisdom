Add-Type -AssemblyName System.Drawing

$sourcePath = Join-Path $PSScriptRoot "..\public\assets\images\new logo.jpeg"
$outputPath = Join-Path $PSScriptRoot "..\public\assets\images\codinggroups-logo-transparent.png"

$source = [System.Drawing.Bitmap]::new($sourcePath)
$output = [System.Drawing.Bitmap]::new($source.Width, $source.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($output)
$graphics.DrawImage($source, 0, 0, $source.Width, $source.Height)
$graphics.Dispose()

$rect = [System.Drawing.Rectangle]::new(0, 0, $output.Width, $output.Height)
$mode = [System.Drawing.Imaging.ImageLockMode]::ReadWrite
$format = [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
$data = $output.LockBits($rect, $mode, $format)

$stride = [Math]::Abs($data.Stride)
$length = $stride * $output.Height
$bytes = [byte[]]::new($length)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $length)

for ($y = 0; $y -lt $output.Height; $y++) {
  $row = $y * $stride

  for ($x = 0; $x -lt $output.Width; $x++) {
    $i = $row + ($x * 4)
    $b = [int]$bytes[$i]
    $g = [int]$bytes[$i + 1]
    $r = [int]$bytes[$i + 2]

    $max = [Math]::Max($r, [Math]::Max($g, $b))
    $min = [Math]::Min($r, [Math]::Min($g, $b))
    $spread = $max - $min
    $brightness = ($r + $g + $b) / 3
    $saturation = 0

    if ($max -gt 0) {
      $saturation = ($spread / $max) * 255
    }

    $isNeutral = $saturation -lt 24 -and $spread -lt 28
    $isCheckerWhite = $isNeutral -and $brightness -gt 220
    $isCheckerGray = $isNeutral -and $brightness -gt 165 -and $brightness -lt 225

    if ($isCheckerWhite -or $isCheckerGray) {
      $bytes[$i + 3] = 0
    } else {
      $bytes[$i + 3] = 255
    }
  }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $length)
$output.UnlockBits($data)

$output.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$source.Dispose()
$output.Dispose()

Write-Output $outputPath
