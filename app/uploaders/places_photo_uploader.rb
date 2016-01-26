class PlacesPhotoUploader < CarrierWave::Uploader::Base

  if Rails.env.test?
    storage :file
  else
    storage :fog
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url
   ActionController::Base.helpers.asset_path("default.jpg")
 end
end
