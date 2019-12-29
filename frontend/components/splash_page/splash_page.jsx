import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component{
  // constructor(props) { // Probably won't use.
  //   super(props);
  // };

  signUpButton(text="Sign Up") {
    return(<Link to="/signup" className="pseudoButton">{text}</Link>);
  }

  render(){
    return(
      <div className="splash_page">

        <div className="sp_discover_row">
          <div className="sp_dscvr_cnt">
            <div className ="sp_dscvr_l">
              <h1>Discover and share the world's finest photos</h1>
              <p>Be inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads-just great photography</p>
              {this.signUpButton()}
            </div>
            <div className ="sp_dscvr_r"></div>
            
          </div>
        </div>


        <div className="sp_difference_row">
          <h1> What makes us different? </h1>
          <div className="sp_d_3_cols">

            <div className="sp_d_col"> {/*Column 1*/}
              <div className="svg seedling"> </div>
              
              <h3>Grow as a photographer</h3>
              <p>Get immediate exposure with your first upload. Our algorithms give you feedback starting from day one.</p>
            </div>

            <div className="sp_d_col"> {/*Column 2 */}
            <div className="svg penpaper"> </div>
              <h3>Build your career</h3>
              <p>Present yourself as a professional. Our platform lets you showcase your galleries, services, and workshops.</p>
            </div>

            <div className="sp_d_col"> {/*Column 3*/}
              <div className="svg graph"></div>
              <h3>Measure your growth</h3>
              <p>With advanced statistics, receive valuable insights in how you and your photos rank within the community.</p>
            </div>

          </div>
        </div>

        <div className="sp_editors_choice_row">
          <h1>Editor's Choice</h1> 
          <h2>Discover fresh inspiration daily. Your photos can even be featured in our handpicked Editors' Choice Gallery</h2>
         
          {this.signUpButton("View Editors' Choice")}
          <div className="sp_ed_photos_ALL_rows">
            <div className="sp_ed_p_r"> 
              {/* 3 Photos here */}
              <li className="picture" id="p1_1"></li> {/* ID can NOT start with a number in html5! */}
              <li className="picture" id="p2_1"></li>
              <li className="picture" id="p3_1"></li>
            </div>

            <div className="sp_ed_p_r"> 
              {/* 3 photos here */}
              <li className="picture" id="p1_2"></li>
              <li className="picture" id="p2_2"></li>
              <li className="picture" id="p3_2"></li>
             </div>

          </div>
        </div>

        <div className="sp_join_row">
          <h1>Join our photography community today</h1>
          <h2>We want fresh, creative talent like you. Join our global network of like-minded creators to be inspired by incredible photos daily, and get rewarded for your talents</h2>
          {this.signUpButton()}
          {/* FINDME consolidate the two button actions as one? */}
        </div>

      </div>
    )
  }

};

export default SplashPage;