export const fetchUser = (id) => ( //TODO: FINDME replace id with username here?
  $.ajax({
    method: 'get',
    url: `/api/users/${id}`,
  })
); 

export const updateUser = (user) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`,
    data: { user },
  })
); 
