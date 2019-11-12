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
  has_one_attached :photo
end
