Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end


root 'site#index'

get 'blenbox' => 'blenbox#index'

get 'oxys' => 'oxys#index'
get 'oxys/guide' => 'oxys#guide'

get 'now' => 'site#now'
get 'clicesportes' => 'site#clicesportes'
get 'refap' => 'site#refap'
get 'clicrbs' => 'site#clicrbs'
get 'facebook-gvt-tv' => 'site#facebook_gvt_tv'
get 'instagvt' => 'site#instagvt'
get 'guia-de-tv' => 'site#guia_de_tv'
get 'menu-de-apps' => 'site#menu_de_apps'




# get "/jobs" do
#   erb :'rd/index'
# end

end
