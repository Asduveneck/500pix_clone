# [1000px](https://asd-1000pix.herokuapp.com/)

###[Live Link](https://asd-1000pix.herokuapp.com/)

1000px is a pixel-perfect tribute to the photography site, [500px](https://web.500px.com/). Users can post and share images, as well as look at the profiles of other users as well.

## Table of Contents

  - [Technology Stack](#Technology-Stack)
  - [How to Use](#How-to-Use)
  - [Features](#Features)
    * [Viewing All Photos](#Viewing-All-Photos)
    * [Photo Show Page](#Photo-Show-Page)
    * [Create, Update, Delete Photos](#Create,-Update,-Delete-Photos)
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

  Hovering over a photograph reveals information about the photographer and image, and clicking on an image takes you to that photo's show page.

### Photo Show Page

  The Photo Show Page includes a larger images accompanied by a description if the photographer wrote one.

  Clicking on the photographer's name will redirect you to that photographer's profile page.

### User Profile Page

  

### Create, Update, Delete Photos

### Features

Currently, there is a secure frontend to backend user authentication via BCrypt. Photos can be viewed on a home feed. Hovering over a photo adds a shadow for emphasis and reveals the photos title.

### Screen Shots

#### Home Page 

![Home Page](readme_assets/home.jpg)

#### Index Page

![Index Page](readme_assets/index.png)




## Future Features

  * Users can create, read, update, and delete photos
  * Each image can be viewed in a larger frame
  * Infinite scroll for the home feed 
  * Each photo updates the number of views it has.
  * Hovering over a photo reveals more information about it
  * Tracking data with each photo and displaying summary statistics

