class PlacesController < ApplicationController
  before_action :authorize_user, only: [
    :create,
    :update,
    :destroy
  ]

  def index
    if params[:location] == nil || params[:location].empty?
      flash[:notice] = "Please submit a valid location"
      redirect_to root_path

    else
      location = params[:location].downcase.gsub(/\W/, "")
      coordinates = Geocoder.coordinates(location)
      if coordinates == nil
        flash[:notice] = "Please submit a valid location"
        redirect_to root_path
      else
        @coordinates = coordinates
        @places = Place.all.near(@coordinates, 10)
      end
    end
  end

  def show
    @place = Place.find(params[:id])
    @coordinates = [@place.latitude, @place.longitude]
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

  def edit
    @place = Place.find(params[:id])
  end

  def destroy
    @place = Place.find(params[:id])
    @place.destroy
    redirect_to root_path
  end

  def update
    @place = Place.find(params[:id])

    @place.update(place_params)

    if @place.save
      redirect_to place_path(@place)
    else
      flash[:errors] = @place.errors.full_messages.join(". ")
      render action: 'new'
    end
  end

  private

  def place_params
    params.require(:place).permit(
      :name,
      :address,
      :address2,
      :city,
      :state,
      :zip,
      :category,
      :description,
      :user_id,
      :latitude,
      :longitude,
      :image
    )
  end

  def authorize_user
    unless user_signed_in?
      redirect_to root_path
    end
  end
end
