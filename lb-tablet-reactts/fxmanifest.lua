fx_version "cerulean"
game "gta5"

title "LB Tablet - App Template | React TS"
description "A template for creating apps for the LB Tablet."
author "Breze & Loaf"

shared_script "config.lua"
client_script "client/**.lua"
server_script "server/**.lua"

files {
    "ui/dist/**/*",
    "ui/icon.png"
}

-- ui_page "ui/dist/index.html"
ui_page "http://localhost:3000"
