class UsersController < ApplicationController
  def show
    binding.pry
    @user = User.find(params[:id])
    @places = @user.places
  end
end
