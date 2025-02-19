@echo off
cd /d %~dp0
@REM echo Starting local server at http://localhost:8000

:: Python の HTTP サーバーを起動
start python -m http.server 8000

:: 3秒待機してからブラウザを開く
timeout /t 3 >nul

:: デフォルトのブラウザで http://localhost:8000 を開く
start http://localhost:8000

exit
