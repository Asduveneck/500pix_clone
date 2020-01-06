export const fetchUser = (id) => (
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
