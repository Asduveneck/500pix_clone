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
  belongs_to :user
end
