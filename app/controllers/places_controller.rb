class PlacesController < ApplicationController
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
    params.require(:place).permit(
      :name,
      :address,
      :address2,
      :city,
      :state,
      :zip,
      :category,
      :description
    )
  end
end
