export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  }).then( 
    () => console.log("success logging in"),
    () => console.log("failed to log in")
  )
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  }).then(
    () => console.log("success logging out"),
    () => console.log("failed to log out")
  )
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  }).then(
    () => console.log("success signing up"),
    () => console.log("failed to sign up")
  )
);