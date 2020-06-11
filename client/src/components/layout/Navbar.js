import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/authActions';
import { motion } from "framer-motion";
import logo from '../../img/logo.png';


class Navbar extends Component {
    onLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
        
    }
    render() {
        const {isAuthenticated,user}=this.props.auth;
        /*const authLinks={
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                          <a className="nav-link" 
                          href=""
                          onClick={this.onLogoutClick.bind(this)}>
                          <img src={user.avatar} style={{width:'25px',marginRight:'5px'}} alt={user.name}/>
                          {''}Logout</a>
                    </li>
                    
            </ul>
        };
        const guestLinks={
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                          <Link className="nav-link" to="/register">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                          <Link className="nav-link" to="/login">Log In</Link>
                    </li>
            </ul>
        };*/
        return (
                <div>
                <nav className="navbar 
                 navbar-expand-sm navbar-dark bg-success mb-4">
                <div className="container">
              
                <Link className="navbar-brand" to="/">  
                <motion.img animate={{ scale: 0.5, rotate: 360, opacity: 0.7 }}
                        transition={{
                        yoyo: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                       }} className="logo" 
                        src={logo}/>
                        {' '}CropSeller</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                     <Link className="nav-link" to="/profiles">Farmers
                     </Link>
                     </li>
                     <li className="nav-item ">
                     <Link className="nav-link" to="/profiles">Dealers
                     </Link>
                     </li>
                     <li className="nav-item ">
                     
                     </li>
                     </ul>
                     {isAuthenticated ? 
                     <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                          <a className="nav-link" 
                          href=""
                          onClick={this.onLogoutClick.bind(this)}>
                          {'Hi,  ' +user.name+'!'}{' '}{' '}{' '}{' '}{'  '}
                       <motion.i animate={{ scale: 0.5, opacity: 0.7 }}
                        transition={{
                        yoyo:3,
                        duration: 2,
                        ease: "easeInOut"
                       }} class="fa fa-user" aria-hidden="true"></motion.i>
                          {' '}{' '}{'  '}Logout</a>
                    </li>
                    
            </ul>
            :  <ul className="navbar-nav ml-auto">
                    <motion.li  
                    initial={{opacity:0,x:+100}}
                    animate={{ opacity:1,x:0 }}
                    transition={{ 
                    duration: 2,delay:1}}
                     className="nav-item">
                          <Link className="nav-link" to="/register">Sign Up</Link>
                    </motion.li>
                    <motion.li initial={{opacity:0,x:+100}}
                    animate={{ opacity:1,x:0 }}
                    transition={{ 
                    duration: 2,delay:1}}
                     
                      className="nav-item">
                          <Link className="nav-link" to="/login">Log In</Link>
                    </motion.li>
            </ul>}
                    </div>
            </div>
            </nav>
            </div>
        )
    }
}
Navbar.propTypes={
    logoutUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStateToProps=(state)=>({
    //same in index.js file auth:
    //you can put any at (auth:) to access its properties and her using auth state by state.auth
    auth:state.auth,
});
        
        
export default connect(mapStateToProps,{logoutUser})(Navbar);