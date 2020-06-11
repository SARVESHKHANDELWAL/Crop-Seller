import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import showcase from '../../img/showcase.jpg';
import showcase1 from '../../img/showcase1.jpg';
import showcase2 from '../../img/showcase2.jpg';
import leaf from '../../img/leaf.png';
import backimg from '../../img/backimg.jpg';
import backimg1 from '../../img/backimg1.jpg';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';
import img4 from '../../img/4.png';

import { motion } from "framer-motion"


class Landing extends Component {
    //Again a lifecycle method to not go to again for login when we change the api parameter
     componentDidMount(){
         if(this.props.auth.isAuthenticated){
             this.props.history.push('/dashboard');
         }
     }
    render() {
        return (
           
           
            <div id="carouselExampleSlidesOnly" className="landing carousel slide" data-ride="carousel">
          <div className="carousel-inner ">
          <div className="carousel-item active">
             <img className="d-block frontimg w-100" src={showcase} alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
             <div className="container">
            <div className="row">
            <motion.div 
            initial={{opacity:0,y:-100}}
            animate={{ opacity:1,y:50 }}
              transition={{ 
              duration: 2,delay:3,loop: Infinity, type: "tween", stiffness:100
              }} className="col-md-12 text-center">
            <h1 className="display-6 mb-4">Manage Your Farm At Your Finger Tips!
            </h1>
            <p className="lead">CropSeller</p>
            <hr/>
            
            </motion.div>
            </div>
            </div>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block frontimg w-100" src={showcase1} alt="Second slide"/>
       <div class="carousel-caption d-none d-md-block">
   <div className="container">
            <div className="row">
            <motion.div 
            initial={{opacity:0,y:-100}}
            animate={{ opacity:1,y:50 }}
              transition={{ delay:5, duration:4,loop: Infinity,type: "tween", stiffness:150}}
              className="col-md-12 text-center">
            <h1 className="display-6 mb-4">Want Skip Pen And Paper To Record Your Data
            </h1>
            <p className="lead ">CropSeller</p>
            <hr/>
           
            </motion.div>
            </div>
            </div>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block  frontimg w-100" src={showcase2} alt="Third slide"/>
       <div class="carousel-caption d-none d-md-block">
   <div className="container">
            <div className="row">
            <motion.div initial={{opacity:0,y:-100}}
            animate={{ opacity:1,y:50 }}
              transition={{ delay:8,duration:4,loop: Infinity,type: "tween", stiffness:150}}
               className="col-md-12 text-center">
            <h1 className="display-6 mb-4">Start Selling Your Crop Easily and Make Your Business to Higher Level
            </h1>
            <p className="lead">CropSeller</p>
            <hr/>
           
            </motion.div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <br/>
    
  
    <div className="col-md-12 text-center">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <motion.h3 
      initial={{opacity:0}}
            animate={{ opacity:1}} 
              transition={{duration:2,loop: Infinity}} className="heading">CROP SELLER</motion.h3>
      <h5><span className="heading">A Farm</span> Management Application</h5>
      <div className="col-lg-12 text-center">
      <img className="mx-auto d-block  " src={leaf} alt="First slide"/>
      </div>
      <h4 className="heading">Services
      </h4>
      <h5 className="heading" >Farm Management</h5>
      <motion.img initial={{x:-600}}
            animate={{x:0,width:200,height:200}} 
              transition={{duration:2,delay:2,
              type: "tween", stiffness:150}} 
              className="img1" src={img1}/>
      
      <br/>
      <br/>
      <br/>
      
      
      <h5 className="heading">Farm Inspection</h5>
      <motion.img initial={{x:+600}}
            animate={{x:0,width:200,height:200}}
              transition={{duration:2,delay:3,
              type: "tween", stiffness:150}} 
              className="img1" src={img2}/>
      <br/>
      <br/>
      <br/>
     
      <h5 className="heading">Crop Calendar Implementation</h5>
      <motion.img initial={{x:-600}}
            animate={{x:0,width:200,height:200}}
              transition={{duration:2,delay:4,
              type: "tween", stiffness:150}} 
              className="img1" src={img3}/>
      <br/>
      <br/>
      <br/>
     
      <h5 className="heading">Analytical Dashboard & Reports</h5>
      <motion.img initial={{x:+600}}
            animate={{x:0,width:200,height:200}}
              transition={{duration:2,delay:5,
              type: "tween", stiffness:150}}  className="img1" src={img4}/>
      
      
    </div>


<hr/>
<hr/>
  <div className="col-md-12 text-center">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h3 className="heading">CROP SELLER</h3>
      <h5><span className="heading">A Farm</span> Management Application</h5>
      <div className="col-lg-12 text-center">
      <img className="mx-auto d-block  " src={leaf} alt="First slide"/>
      </div>
    </div>

    <div id="pricing" className="container-fluid">
  <div className="text-center">
    <h2>Pricing</h2>
    <h4>Choose a payment plan that works for you</h4>
  </div>
  <div className="row slideanim">
    <div className="col-sm-4 col-xs-12">
      <motion.div 
      initial={{opacity:0,x:-100}}
            animate={{ opacity:1,x:0 }}
              transition={{ delay:6,duration:2}} className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Basic</h1>
        </div>
        <div className="panel-body">
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$19</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </motion.div>      
    </div>     
    <div className="col-sm-4 col-xs-12">
      <motion.div 
      initial={{opacity:0,x:0}}
            animate={{ opacity:1,x:0 }}
              transition={{ delay:4,duration:2}} className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Pro</h1>
        </div>
        <div className="panel-body">
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$29</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </motion.div>      
    </div>       
    <div className="col-sm-4 col-xs-12">
      <motion.div 
      initial={{opacity:0,x:+100}}
            animate={{ opacity:1,x:0 }}
              transition={{ delay:6,duration:2}} className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Premium</h1>
        </div>
        <div className="panel-body">
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </motion.div>      
    </div>    
  </div>
</div>
<br/>


<div className="backimg">
<motion.div 
      initial={{opacity:0}}
            animate={{ opacity:1,x:0,width:500,height:550 }}
              transition={{ delay:7,duration:3}} className="container contactus text-center md-5">
<div className="col-md-12 text-center">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h3 className="heading">CROP SELLER</h3>
      <h5><span className="heading">A Farm</span> Management Application</h5>
      <div className="col-lg-12 ">
      
      </div>
    </div>
<h4 className="text-center">Contact Us</h4>
<div className="form-group">
  
  <i className="fa fa-user icon1"></i>
  <input type="text" className="form-control" placeholder="User Name"id="usr"/>
</div>
<div className="form-group">
  
  <i className="fa fa-mobile icon1"></i>
  <input type="text" className="form-control" placeholder="Mobile Number"id="usr"/>
</div>
<div className="form-group">
  <label for="comment">Comment:</label>
  <textarea placeholder="Enter your Query here!"className="form-control" rows="5" id="comment"></textarea>
</div>
<input type="submit" className="btn  btn-info btn-block mt-4"/>

</motion.div>
</div>

</div>

        )
    }
}
Landing.propTypes={
   
    auth:PropTypes.object.isRequired,
   
}
//map the state with props
const mapStateToProps=(state)=>({
    //same in index.js file auth:
    //you can put any at (auth:) to access its properties and her using auth state by state.auth
    auth:state.auth,
   

});
export default connect(mapStateToProps)(Landing);