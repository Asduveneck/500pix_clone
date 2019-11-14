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

  belongs_to :category, 
    foreign_key: :category_id,
    class_name: :Category

  belongs_to :photo, 
    foreign_key: :photo_id,
    class_name: :Photo

  # --------------- Validations ------------------ 
  
  # ---------------    Code     ------------------ 
  
end
