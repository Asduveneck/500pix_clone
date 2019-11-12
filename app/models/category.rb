# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  category   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  # --------------- Associations ----------------

  has_many :category_photos, # maybe just call this photos?
    foreign_key: :category_id,
    class_name: :PhotoCategory

  # --------------- Validations ------------------ 

  validates :category, presence: true  # should be a model constraint.


  # ---------------    Code     ------------------ 
  
end
