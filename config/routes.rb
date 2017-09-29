Rails.application.routes.draw do
  resources :welcomes
  
  root :to => 'welcomes#index'
end
