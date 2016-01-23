Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: :registrations }

  root "places#index"
  resources :places, :users
end
