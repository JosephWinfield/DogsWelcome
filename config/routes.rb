Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: :registrations }

  root "places#landing"
  resources :places, :users
end
