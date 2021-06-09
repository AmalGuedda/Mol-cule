Rails.application.routes.draw do
  resources :items
  root to: 'items#index'
 
  resources :items, only: [:index, :show]
  devise_for :users
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
