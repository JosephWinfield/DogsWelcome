class PlacesController < ApplicationController
  before_action :authorize_user, except: [
    :index,
    :show
  ]

  def index
    @places = Place.all
  end

  def show
    @place = Place.find(params[:id])
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.create(place_params)
    @user = current_user
    @place.user = @user 
    if @place.save
      redirect_to place_path(@place)
      flash[:notice] = "Place added successfully"
    else
      flash[:errors] = @place.errors.full_messages.join(". ")
      render action: 'new'
    end
  end

  private

  def place_params
    binding.pry
    params.require(:place).permit(
      :name,
      :address,
      :address2,
      :city,
      :state,
      :zip,
      :category,
      :description,
      :user_id
    )
  end

  def authorize_user
    if !user_signed_in?
      redirect_to root_path
    end
  end
end
