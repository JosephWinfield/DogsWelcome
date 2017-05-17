class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_address, :category, :image, :get_user_id

  def get_user_id
    current_user ? current_user.id : nil
  end

end
