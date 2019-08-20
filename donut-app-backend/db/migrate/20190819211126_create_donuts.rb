class CreateDonuts < ActiveRecord::Migration[5.2]
  def change
    create_table :donuts do |t|
      t.string :flavour
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end
