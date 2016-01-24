class AddLatitudeAndLongitudeToPlaces < ActiveRecord::Migration
  def up
    add_column :places, :latitude, :float
    add_column :places, :longitude, :float
  end

  def down
    remove_column :places, :latitude
    remove_column :places, :longitude
  end
end
