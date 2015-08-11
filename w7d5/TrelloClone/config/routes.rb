Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new, :create]
    resources :boards
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root to: "static_pages#index"
end
