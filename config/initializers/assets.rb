# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

base_css   = %w( blenbox/blenbox.css )
base_js    = %w( blenbox/blenbox.js )
vendor_css = %w( dragdealer.css )
vendor_js  = %w( dragdealer.js )

Rails.application.config.assets.precompile += [ base_css, base_js, vendor_css, vendor_js ].flatten
