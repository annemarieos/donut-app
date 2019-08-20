Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :customers, only: [:index, :show]
  resources :orders, only: [:index, :show]
  resources :donuts, only: [:index, :show]
end
