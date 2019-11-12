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
  belongs_to :category
  belongs_to :photo
end
