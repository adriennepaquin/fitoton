Rails.application.routes.draw do
  resources :takens
  resources :workouts
  resources :instructors
  resources :categories
  resources :users
  
  post "/login", to: "users#login"
  post "/signup", to: "users#signup"
  get "/me", to: "users#me"
  get "/workouts", to: "workouts#index"
end
