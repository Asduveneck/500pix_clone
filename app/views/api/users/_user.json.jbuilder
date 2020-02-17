json.extract! user, :id, :user_name, :first_name, :last_name, :location_city, :location_country, :about, :website, :instagram_username, :facebook_address, :twitter
json.set! :photos, user.photos.ids
# json.set! :photos_all, user.photos_all
# json.set! :photo_urls, user.all_photo_urls # TODO: not actual urls yet
# current guest user: http://localhost:3000/api/users/8.json

if user.cover_pic.attached?()
  json.cov_p_fileUrl polymorphic_url(user.cover_pic)
else
  json.cov_p_fileUrl ""
end

if user.profile_pic.attached?()
  json.prof_p_fileUrl polymorphic_url(user.profile_pic)
else
  json.prof_p_fileUrl ""
end
