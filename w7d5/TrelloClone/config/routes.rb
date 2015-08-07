Rails.application.routes.draw do
  namespace :api do
    resources :users, except: [:new, :create]
    resources :boards
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root to: "static_pages#index"
end
