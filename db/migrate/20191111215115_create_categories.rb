class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :category
      t.references :user, foreign_key: true, index: true

      t.timestamps
    end
  end
end

=begin
Sources:
  shortcut: https://railsguides.net/advanced-rails-model-generators/
  https://stackoverflow.com/questions/9984071/whats-the-difference-between-using-t-integer-and-t-reference-to-define-foreign
  https://stackoverflow.com/questions/7788188/what-is-the-difference-between-t-belongs-to-and-t-references-in-rails
  https://edgeguides.rubyonrails.org/active_record_migrations.html#special-helpers

=end
