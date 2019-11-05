// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components to make:
// import Root from './components/root';
// import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render( <h1>1000 Pix entry file in 'frontend'. </h1>, root);


  $.ajax({
    method: 'post', 
    url: '/api/users', 
    data: {
        user: {
          user_name: "user_01",
          password: 'password',
          email: 'user_01_email',
          first_name: 'firstname_01', // violates not null constraint?
          last_name: 'lastname_01', 
        }
      }
  })
    .then(() => console.log('success'),
      () => console.log('you done goofed')
    );
  // .catch(()=>console.log('you done goofed ')); // no worky

})
