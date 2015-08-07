NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show, :destroy] do
      resources :entries, only: [:index]
    end
    resources :users, except: :new
  end
  
  resources :users, only: :new
  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#index"
end
