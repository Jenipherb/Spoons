Rails.application.routes.draw do
  resources :spoons, only: %i[index show create update destroy]
  resources :tasks, only: %i[index show create update destroy]
  resources :users, only: %i[show create update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  get '/me', to: 'users#show'
  get 'me/tasks', to: 'user#show_tasks'
  post 'task/task_added', to: 'users#create_tast'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  

end
