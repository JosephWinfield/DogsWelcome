class Api::V1::PlacesController < ApplicationController
	def index
		# 	binding.pry
		render json: Place.all
	end

	def show
		render json: Place.find(params[:id])
	end

	def new
		@place = Place.new
	end

	def create
		binding.pry
		@place = Place.create(place_params)
		@user = current_user
		@place.user = @user
		@place.save!
		render json: @place
	end

	private

  def place_params
    params.permit(
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

end
