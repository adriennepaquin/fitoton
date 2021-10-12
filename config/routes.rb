Rails.application.routes.draw do
  resources :takens
  resources :workouts, only: [:index, :show]
  resources :instructors, only: [:index]
  resources :categories
  resources :users
  
  post "/login", to: "users#login"
  post "/signup", to: "users#signup"
  get "/me", to: "users#me"
  # get "/workouts", to: "workouts#index"
end
