@ECHO OFF

TIMEOUT /T 0
REM Start serial-port-json-server
START "Start serial-port-json-server" /MIN "C:\Users\csrs\Documents\UpdateEnergyLiteracy-press\energy_literacy_chrome_no_leap\support\serial-port-json-server.exe"

TIMEOUT /T 10
REM Start Energy literacy (Chrome)
START "Start Energy literacy model" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -kiosk -fullscreen "file:///C:/Users/csrs/Documents/UpdateEnergyLiteracy-press/index.html"

TIMEOUT /T 10
START "autoclick" "C:\Users\csrs\Documents\UpdateEnergyLiteracy-press\energy_literacy_chrome_no_leap\autoclick.exe"