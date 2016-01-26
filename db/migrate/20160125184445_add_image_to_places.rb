class AddImageToPlaces < ActiveRecord::Migration
  def up
    add_column :places, :image, :string
  end
  def down
    remove_column :places, :image
  end
end
