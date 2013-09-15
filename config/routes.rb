Rodrigoquaresma::Application.routes.draw do

root 'site#index', :as => :index

# get "/o-evento", :to => "site#index", :as => :agrimoney_evento, :defaults => { :content => "evento" }

end
