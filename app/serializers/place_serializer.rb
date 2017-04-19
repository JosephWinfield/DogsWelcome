class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_address, :category, :image, :get_user_id




  def get_user_id
    unless current_user == nil
      current_user.id
    end
  end
end
