Rodrigoquaresma::Application.routes.draw do

root 'site#index', :as => :index, :defaults => { :content => "home" }

get "/trabalhos", :to => "site#index", :as => :site_jobs, :defaults => { :content => "jobs" }
get "/projetos", :to => "site#index", :as => :site_projects, :defaults => { :content => "projects" }
get "/bio", :to => "site#index", :as => :site_bio, :defaults => { :content => "bio" }

end