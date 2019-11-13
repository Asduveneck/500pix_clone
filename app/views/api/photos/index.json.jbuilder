@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
    json.fileUrl url_for(photo.file) # sets url for photo file to be the file URL.
  end
end
