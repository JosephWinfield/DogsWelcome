Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: :registrations }

  root "places#landing"
  resources :places, :users

  namespace :api do
    namespace :v1 do
      resources :places, except: [:delete]
      # resources :users
    end
  end
end
