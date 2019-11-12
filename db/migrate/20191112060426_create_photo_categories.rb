class CreatePhotoCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_categories do |t|
      t.references :category, foreign_key: true, index: true
      t.references :photo, foreign_key: true, index: true

      t.timestamps
    end
  end
end

#  rails g model photo_category category:references photo:references