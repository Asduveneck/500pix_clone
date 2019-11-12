class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :views, default: 0
      t.integer :rating
      t.string :title, null: false
      t.text :description
      t.references :user, foreign_key: true, index: true

      t.timestamps
    end
  end
end

# rails g model photo views:integer rating:integer title description:text user:reference