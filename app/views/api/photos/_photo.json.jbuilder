json.extract! photo, :id, :title, :description, :views, :rating

if photo.file.attached?()
  json.fileUrl polymorphic_url(photo.file) # sets url for photo file to be the file URL.
else
  json.fileUrl ""
end # Make this a validation in the model level ASAP. FINDME