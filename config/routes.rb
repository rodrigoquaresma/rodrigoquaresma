Rails.application.routes.draw do

  # root 'portfolio#index'

  get '/', :to => redirect('projects')
  get 'projects', :to => 'portfolio#index', :as => :portfolio_index
  get 'about', :to => 'portfolio#about', :as => :portfolio_about
  get 'experience', :to => 'portfolio#experience', :as => :portfolio_experience
  # get 'projects/detail', :to => 'portfolio#show', :as => :portfolio_show
  get 'projects/detail/:id', :to => 'portfolio#show', :as => :portfolio_show


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

  get 'vangogh' => 'vangogh#index'
  get 'vangogh/experience' => 'vangogh#experience'
  get 'vangogh/about' => 'vangogh#about'
  get 'vangogh/contact' => 'vangogh#contact'
  get 'vangogh/profile' => 'vangogh#profile'

  get 'vangogh/results' => 'vangogh#results'
  get 'vangogh/results/detail/:id' => 'vangogh#show', as: 'vangogh_show'
  # get 'vangogh/results/detail/:id' => 'vangogh#work_detail', as: 'vangogh_work_detail'

  get 'booking_b/index'
  get 'booking_a/index'

end
