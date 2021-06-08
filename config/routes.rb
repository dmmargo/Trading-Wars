Rails.application.routes.draw do
  root 'welcome#index'
  
  get 'welcome/index'

  get 'welcome/current'

  get 'welcome/portfolio'

  get 'welcome/history'

  get 'welcome/news'

  get 'welcome/myaccount'

  get 'welcome/login'

  get 'accounts/settings'

  get 'accounts/logout'

  get 'account/manageMoney'

  get 'money/credits'

  get 'money/waging'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
