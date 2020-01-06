Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do  
    resources :users, only: [:create, :update, :show], param: :user_name
    resource :session, only: [:create, :destroy, :show]
    resources :categories, only: [:index, :show]
    resources :photos # All routes will eventually be used.
  end

  root "static_pages#root" # sets up entry
end
