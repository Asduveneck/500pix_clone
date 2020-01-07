json.extract! photo, :id, :title, :description, :views, :rating, :created_at
# json.set! :user, photo.user # TMI
# Check via: http://localhost:3000/api/photos.json

json.set! :photographer, photo.photographer
json.set! :photo_usr_name, photo.user[:user_name]

if photo.file.attached?()
  json.fileUrl polymorphic_url(photo.file) # sets url for photo file to be the file URL.
else
  json.fileUrl ""
end # TODO: validate in the model level.