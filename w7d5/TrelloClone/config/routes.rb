Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new, :create]
    resources :boards do
      resources :lists, only: [:index, :create, :show, :destroy]
    end
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root to: "static_pages#index"
end
