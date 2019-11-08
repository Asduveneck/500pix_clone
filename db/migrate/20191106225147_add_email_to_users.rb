class AddEmailToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string
    add_index :users, :email, unique: true
  end
end
