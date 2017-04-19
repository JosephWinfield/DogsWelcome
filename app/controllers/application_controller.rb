class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :configure_permitted_parameters, if: :devise_controller?

  protected
  def after_sign_in_path_for(current_user)
    user_path(current_user)
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [
      :first_name,
      :last_name,
      :address,
      :address2,
      :city,
      :state,
      :zip,
      :avatar
    ])

    devise_parameter_sanitizer.permit(:account_update, keys: [
      :first_name,
      :last_name,
      :address,
      :address2,
      :city,
      :state,
      :zip,
      :avatar
    ])
  end

end
