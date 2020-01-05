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

  # AWS. May rename later to 'file' or 'pic'...
  has_one_attached :file # association is photo.file

  # To other models
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User 

  has_many :photo_categories, 
    foreign_key: :photo_id,
    class_name: :PhotoCategory
    
  # through associations:

    # has_many :galleries LATER
  has_many :categories, 
    through: :photo_categories,
    source: :category

  # --------------- Validations ------------------ 

  validates :title, :user_id, presence: true # photos must belong to a user AND have a title
  # validate :ensure_file
  # ---------------    Code     ------------------ 

  def ensure_file
    unless self.file.attached?
      errors[:file] << "missing file attachment"
    end
  end

  def photographer
    "#{user.first_name} #{user.last_name}"
  end

end
