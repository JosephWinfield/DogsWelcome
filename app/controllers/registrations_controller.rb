class RegistrationsController < Devise::RegistrationsController
  def show
    super
  end

  protected

  def after_update_path_for(current_user)
    user_path(current_user)
  end
end
