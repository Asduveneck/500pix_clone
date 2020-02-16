 /* 
  inspired by benchbmb and tutorial video https://vimeo.com/278727054
  Calling this a file because we will be working with S3.
    - In our Active.Storage, we call the association `file`, so I will stick to that convention here
 */

export const createPhoto = (photo) => (
  $.ajax({
    method: 'post',
    url: `/api/photos/`,
    data: photo, // BUG: We had to remove the {} to get the form to work...
    // TODO: Test if seeding still works. If not, then we need to restructure our AJAX call again with photo in {} for the seed...
    contentType: false,
    processData: false,
  })
); 

export const fetchPhotos = (page) => (
  $.ajax({
    method: 'get',
    url: `/api/photos?offset=${page}`,
  })
); 

export const fetchPhoto = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/photos/${id}`,
  })
); 

export const updatePhoto = (photo) => (
  $.ajax({
    method: 'patch',
    url: `/api/photos/${photo.id}`,
    data: {photo},
  })
); 

export const deletePhoto = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/photos/${id}`,
  })
); 