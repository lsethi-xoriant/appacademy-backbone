Rails.application.routes.draw do
  namespace :api do
    resources :users, except: :new
  end

  resources :users, only: :new
  resource :session, only: [:new, :create, :destroy]
end
