# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  views       :integer          default("0")
#  rating      :integer
#  title       :string           not null
#  description :text
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  # --------------- Associations ----------------
  has_one_attached :photo # AWS. May rename later to 'file' or 'pic'...

  # To other models
  has_many :galleries

  # has_many :categories, through: 

  # --------------- Validations ------------------ 

  validates :title, presence: true
  
  # ---------------    Code     ------------------ 
  
end
