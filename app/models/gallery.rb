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
  belongs_to :user

  # --------------- Validations ------------------ 

  validates :gallery, presence: true # If you create a gallery, you should give it a name...

  # ---------------    Code     ------------------ 
  
end
