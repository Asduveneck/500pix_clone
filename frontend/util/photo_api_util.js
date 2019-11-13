 /* 
  inspired by benchbmb and tutorial video https://vimeo.com/278727054
  Calling this a file because we will be working with S3.
    - In our Active.Storage, we call the association `file`, so I will stick to that convention here
 */

export const createPhoto = (file) => (
  $.ajax({
    method: 'post',
    url: `/api/photos/`,
    file
  })
); 

export const fetchPhotos = (files) => (
  $.ajax({
    method: 'get',
    url: `/api/photos`,
    files
  })
); 

export const fetchPhoto = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/photos/${id}`,
  })
); 

export const updatePhoto = (file) => (
  $.ajax({
    method: 'patch',
    url: `/api/photos/${file.id}`,
    file
  })
); 

export const deletePhoto = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/photos/${id}`,
  })
); 