# [1000px](https://asd-1000pix.herokuapp.com/)

### [Live Link](https://asd-1000pix.herokuapp.com/)

![Splash Page](readme_assets/splash.gif)

1000px is a pixel-perfect tribute to the photography site, 500px. Users can post and share images, as well as look at the profiles of other users as well.

## Table of Contents

  - [Technology Stack](#Technology-Stack)
  - [How to Use](#How-to-Use)
  - [Features](#Features)
    * [Viewing All Photos](#Viewing-All-Photos)
    * [Photo Show Page](#Photo-Show-Page)
    * [Create Photos](#Create-Photos)
    * [Update or Delete Photos](#Update-or-Delete-Photos)
    * [User Profile Page](#User-Profile-Page)
  - [Future Features](#Future-Features)

## Technology Stack

  1000px is a full-stack single-page app created with a Ruby on Rails backend with a PostgreSQL database. The single-page app dynamically renders content via React.js with Redux. Additionally, JBuilder was used to create API responses to help maintain a flat state, and AWS S3 cloud storage was used to store images remotely.

## How to Use

  To use 1000px, you can interact with the [live site](https://asd-1000pix.herokuapp.com/) hosted on Heroku. 
  
  You can also download this repository and set up and run the dependencies via `npm init && npm install && npm start`. You will need to connect AWS S3 to work with ActiveRecord.

## Features

### Viewing All Photos

  Upon successful login, the user is redirected to the index page where every image is rendered.

  ![Index Page](readme_assets/index.gif)

  Hovering over a photograph reveals information about the photographer and image, and clicking on an image takes you to that photo's show page.

  To maintain a simpler slice of state and minimize information I fetch with each photograph, I wrote a model method to return the photographer's name as a single string, and assign the value in jBuilder.
  
  
<details>
  <summary style="color: blue" >Model Method</summary>
    
  ```rb
    def photographer
      "#{user.first_name} #{user.last_name}"
    end
  ```
  
</details>

### Photo Show Page

  The Photo Show Page includes a larger images accompanied by a description if the photographer wrote one.


  Clicking on the photographer's name will redirect you to that photographer's profile page.

  ![User Profile and Photo Show](readme_assets/user_prof.gif)

### User Profile Page

  On the user profile page, the user can view all of their photos they've posted. Eventually, the user profile page will let a user have their own profile picture and 'cover' photo.

### Create photos

  Users can create new photos via the `upload button` in the top of the nav bar. 

  ![Photo Create](readme_assets/photo_create.gif)

  I constrain the accepted file format on the frontend before it reaches the server, and render the errors dynamically.

  Upon successfully attaching an image, the user is redirected to the Photo Manager where the user can update or delete photographs.

### Update or Delete photos

  In the Photo Manager, users can only access their own individual photos. They select a photograph by clicking on it, where they can then update the title or description, or delete the photograph.

## Future Features

  * Users can create, read, update, and delete photos
  * Each image can be viewed in a larger frame
  * Infinite scroll for the home feed 
  * Each photo updates the number of views it has.
  * Hovering over a photo reveals more information about it
  * Tracking data with each photo and displaying summary statistics

