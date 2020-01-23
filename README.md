# [1000px](https://asd-1000pix.herokuapp.com/)

[Live Link](https://asd-1000pix.herokuapp.com/)

1000px is a pixel-perfect tribute to the photography site, [500px](https://web.500px.com/). Users can post and share images, as well as look at the profiles of other users as well.

## Table of Contents

  * Technology Stack
  * How to Use
  * Features
    * Viewing All Photos
    * Create, Update, Delete Photos
    * Viewing a user's profile page
  * Future Features

### Features

Currently, there is a secure frontend to backend user authentication via BCrypt. Photos can be viewed on a home feed. Hovering over a photo adds a shadow for emphasis and reveals the photos title.

### Screen Shots

#### Home Page 

![Home Page](readme_assets/home.jpg)

#### Index Page

![Index Page](readme_assets/index.png)

### Difficulties 

  There were absurd bugs that occurred during development. For example, the testing environment got leaked into the production environment, which caused Heroku to break.

  Currently, images hosted on AWS are displaying locally but not on Heroku.


#### Features to be developed

  * Users can create, read, update, and delete photos
  * Each image can be viewed in a larger frame
  * Infinite scroll for the home feed 
  * Each photo updates the number of views it has.
  * Hovering over a photo reveals more information about it
  * Tracking data with each photo and displaying summary statistics

