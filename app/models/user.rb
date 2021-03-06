# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  user_name          :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  library_id         :integer
#  follows_id         :integer
#  first_name         :string           not null
#  last_name          :string           not null
#  location_city      :string
#  location_country   :string
#  about              :text
#  website            :string
#  instagram_username :string
#  facebook_address   :string
#  twitter            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  email              :string           not null
#

class User < ApplicationRecord

  # --------------- Associations ----------------

  # library_id: Might remove later since gallery references user already...
  
  has_many :photos, 
    foreign_key: :user_id, 
    class_name: :Photo, 
    dependent: :delete_all 

  has_many :galleries, 
    foreign_key: :user_id, 
    class_name: :Gallery, 
    dependent: :delete_all  

  # Profile and Cover Photos
  has_one_attached :cover_pic # association is user.cover_pic
  has_one_attached :profile_pic # user.profile_pic

  # --------------- Validations ------------------ 
  
  attr_reader :password
  
  validates :user_name, :password_digest, :session_token, presence: true
  validates :user_name, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :first_name, :last_name, :email, presence: true 
  
  # ---------------    Code     ------------------ 

  # Association helper methods

  # Returns attached files  
    # TODO: remove this if not used for user gallery
  def all_photo_urls
    url_list = []
    photos.each do |photo|
      url_list << photo.file
    end
    url_list
  end

  # def photos_all // there is a method to get the fileURL. photo_attached ? 

  # end

  # User Auth:

  after_initialize :ensure_session_token
  
  def self.find_by_credentials(username, password)
    user = User.find_by(user_name: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end


end
