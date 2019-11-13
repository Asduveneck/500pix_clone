# == Schema Information
#
# Table name: galleries
#
#  id         :integer          not null, primary key
#  gallery    :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Gallery < ApplicationRecord
  # --------------- Associations ----------------
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User 
  
  # I should make a connector table for galleries later...

  # --------------- Validations ------------------ 

  validates :gallery, :user_id, presence: true # If you create a gallery, it must have a name and belong to a user 

  # ---------------    Code     ------------------ 
  
end
