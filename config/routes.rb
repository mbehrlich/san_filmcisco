Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :locations, only: [:index, :update]
  end
  root to: "static_pages#home"
end
