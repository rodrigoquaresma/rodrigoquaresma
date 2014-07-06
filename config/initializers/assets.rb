# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

base_js    = %w( site/site.js blenbox/blenbox.js )
vendor_js  = %w( dragdealer.js jquery-1.9.1.js shortcurt.js )
base_css   = %w( site/styles-dark.css blenbox/blenbox.css )
vendor_css = %w( dragdealer.css ui/1.10.2/themes/smoothness/jquery-ui.css )

Rails.application.config.assets.precompile += [ base_css, base_js, vendor_css, vendor_js ].flatten
