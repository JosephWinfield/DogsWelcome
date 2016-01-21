class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :address2
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :category, null: false
      t.text :description
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
