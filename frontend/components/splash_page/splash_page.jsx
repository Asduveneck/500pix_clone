import React from 'react';

class SplashPage extends React.Component{
  // constructor(props) { // Probably won't use.
  //   super(props);
  // };

  render(){
    return(
      <div className="splash_page">

        <div className="sp_discover_row">
          <div className="sp_dscvr_cnt">
            <div className ="sp_dscvr_l">
              <h1>Discover and share the world's finest photos</h1>
              <p>Be inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads-just great photography</p>
              <button>Sign Up</button>
            </div>
            <div className ="sp_dscvr_r"></div>
            
          </div>
        </div>


        <div className="sp_difference_row">
          <h1> What makes us different? </h1>
          <div className="sp_d_3_cols">

            <div className="sp_d_col"> {/*Column 1*/}
              <i className="fas fa-seedling"></i>
              <h3>Grow as a photographer</h3>
              <p>Get immediate exposure with your first upload. Our algorithms give you feedback starting from day one.</p>
            </div>

            <div className="sp_d_col"> {/*Column 2 */}
              <i className="fas fa-pencil-ruler"></i> {/* https://fontawesome.com/icons/pencil-ruler?style=solid */}
              <h3>Build your career</h3>
              <p>Present yourself as a professional. Our platform lets you showcase your galleries, services, and workshops.</p>
            </div>

            <div className="sp_d_col"> {/*Column 3*/}
              <i className="fas fa-chart-line"></i> {/* https://fontawesome.com/icons/chart-line?style=solid */}
              <h3>Measure your growth</h3>
              <p>With advanced statistics, receive valuable insights in how you and your photos rank within the community.</p>
            </div>

          </div>
        </div>

        <div className="sp_editors_choice_row">
          <h1>Editor's Choice</h1> 
          <h2>Discover fresh inspiration daily. Your photos can even be featured in our handpicked Editors' Choice Gallery</h2>
         
          <button>View Editors' Choice</button>

          <div className="sp_ed_photos_ALL_rows">
            <div className="sp_ed_p_r_1"> 
              {/* 3 Photos here */}
              3 columns of pictures here spaced evenly.
            </div>

            <div className="sp_ed_p_r_2"> 
              {/* 3 photos here */}
              3 columns of pictures here spaced evenly.
             </div>

          </div>
        </div>

        <div className="sp_join_row">
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