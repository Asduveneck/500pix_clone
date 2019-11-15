# [1000px](https://asd-1000pix.herokuapp.com/)


1000px is a photography website to showcase your photography. It utilizes a Rails/PostgreSQL backend with React.js and Redux on the frontend. Images are hosted on AWS S3.

The project was designed and implemented within 10 days, and there are many features planned but not yet executed. 

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

