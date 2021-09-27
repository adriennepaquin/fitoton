Rails.application.routes.draw do
  resources :takens
  resources :workouts
  resources :instructors
  resources :categories
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
