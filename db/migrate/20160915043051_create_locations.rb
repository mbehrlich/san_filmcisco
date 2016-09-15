class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title, null: false
      t.integer :release_year
      t.string :location, null:false
      t.string :facts
      t.string :company
      t.string :distributor
      t.string :director
      t.string :writer
      t.string :actor1
      t.string :actor2
      t.string :actor3
      t.float :lat
      t.float :lng
      t.string :place_id
      t.timestamps null: false
    end
    add_index :locations, :title
    add_index :locations, :release_year
    add_index :locations, :director
    add_index :locations, :writer
    add_index :locations, :actor1
    add_index :locations, :actor2
    add_index :locations, :actor3
  end
end
