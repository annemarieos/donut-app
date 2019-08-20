class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :items
      t.integer :customer_id
      t.float :total_price

      t.timestamps
    end
  end
end
