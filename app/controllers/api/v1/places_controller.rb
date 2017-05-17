class Api::V1::PlacesController < ApplicationController
	def index
		# 	binding.pry
		render json: Place.all
	end

end
