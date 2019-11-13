json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description, :views, :rating 
  json.fileUrl url_for(photo.file) # sets url for photo file to be the file URL. 
end
