# == Schema Information
#
# Table name: photo_categories
#
#  id          :integer          not null, primary key
#  category_id :integer
#  photo_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PhotoCategory < ApplicationRecord
  # --------------- Associations ----------------

  belongs_to :category # Automatically made during migration
  belongs_to :photo

  # --------------- Validations ------------------ 
  
  # ---------------    Code     ------------------ 
  
end
