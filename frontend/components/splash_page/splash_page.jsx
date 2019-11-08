import React from 'react';

class SplashPage extends React.Component{
  // constructor(props) { // Probably won't use.
  //   super(props);
  // };

  render(){
    return(
      <div className="splash_page">

        <div className="splash_discover_row">
          <h1>Discover and share the world's finest photos</h1>
          <p>Be inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads-just great photography</p>
          <div> Link to a photo here? Or make this background a photo and add the curly wave... </div>
          <button>Sign Up</button>
        </div>

        <div className="splash_difference_row">
          <h1> What makes us different? </h1>
          <div className="splash_difference_3_columns">

            <div className="splash_difference_column"> {/*Column 1*/}
              <h2>Grow as a photographer</h2>
            </div>

            <div className="splash_difference_column"> {/*Column 2 */}
              <h2>Build your career</h2>
            </div>

            <div className="splash_difference_column"> {/*Column 3*/}
              <h2>Measure your growth</h2>
            </div>

          </div>
        </div>

        <div className="splash_editor_choice_row">
          <h1>Editor's Choice</h1> 
          <h2>Discover fresh inspiration daily. Your photos can even be featured in our handpicked Editors' Choice Gallery</h2>
         
          <button>View Editors' Choice</button>

          <div className="splash_editor_photos_ALL_rows">
            <div className="splash_editor_photos_row_1"> 
              {/* 3 Photos here */}
              3 columns of pictures here spaced evenly.
            </div>

            <div className="splash_editor_photos_row_2"> 
              {/* 3 photos here */}
              3 columns of pictures here spaced evenly.
             </div>

          </div>
        </div>

        <div className="splash_join">
          <h1>Join our photography community today</h1>
          <h2>We want fresh, creative talent like you. Join our global network of like-minded creators to be inspired by incredible photos daily, and get rewarded for your talents</h2>
          <button>Sign Up</button> 
          {/* FINDME consolidate the two button actions as one? */}
        </div>

      </div>
    )
  }

};

export default SplashPage;