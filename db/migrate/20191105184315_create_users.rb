class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string  :user_name, null: false 
      t.string  :password_digest, null: false
      t.string  :session_token, null: false
      t.integer :library_id
      t.integer :follows_id
      t.string  :first_name, null: false
      t.string  :last_name, null: false
      t.string  :location_city
      t.string  :location_country
      t.text    :about
      t.string  :website
      t.string  :instagram_username
      t.string  :facebook_address
      t.string  :twitter

      t.timestamps
    end
    add_index :users, :user_name, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :library_id
    add_index :users, :follows_id
  end
end

# Terminal Command (in one line):
=begin
rails g model user user_name:string:uniq password_digest 
session_token:string:uniq library_id:integer:index follows_id:integer:index 
first_name last_name location_city location_country about:text website 
instagram_username facebook_address twitter

=end
# Then added manually: null: false 