import React, { Component } from 'react';
import { motion } from "framer-motion";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

 class Login extends Component {
constructor(){
         super();
         this.state={
             
             number:'',
             password:'',
             errors:{}
             
         }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
     };
     //Again a lifecycle method to not go to again for login when we change the api parameter
     componentDidMount(){
         if(this.props.auth.isAuthenticated){
             this.props.history.push('/dashboard');
         }
     }
     //we want that if component receive the props then set state
     //and change the state of errors component 
     //lifecycle methods
     componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
             this.props.history.push('/dashboard')
         }
      if(nextProps.errors){
          this.setState({errors:nextProps.errors})
      }
     }
     onChange(e){
         this.setState({[e.target.name]:e.target.value});
     };
     onSubmit(e){
         
         /*preventDefult is used for when 
         submitting the form to prevent a
          browser reload/refresh.*/
         e.preventDefault();
         const LoginUser={
             
             number:this.state.number,
             password:this.state.password,
            
         }
         //console.log(LoginUser);
          this.props.loginUser(LoginUser);
     }
    render() {
        const {errors}=this.state;

        return (
            <div>
                <div className="login">
              <motion.div initial={{opacity:0,x:-100}}
            animate={{ opacity:1,x:0 }}
              transition={{ 
              duration:3,
              }} className="container">
              <div className="row">
              <div className="col-md-8 col-sm-12 m-auto" >
              <h1 className="display-4 text-center heading"  style={{color:"black"}}>Log In</h1>
              <p className="lead text-center heading" style={{color:"black"}}>Sign In CropSeller Account</p>
              <form onSubmit={this.onSubmit}>
              <i class="fa fa-mobile icon"></i>
              <TextFieldGroup 
                    placeholder="Mobile Number"
                    name= "number"
                    type="text"
                    value={this.state.number}
                    onChange={this.onChange}
                    error={errors.number}/>
                   
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <i class="fa fa-user icon"></i>
               <TextFieldGroup 
                    placeholder="Password"
                    name= "password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}/>
            
            <input type="submit" className="btn submitbutton
             btn-info btn-block mt-4"/>
            <br/>
            <br/>
            </form>
            </div>
        </div>
     </motion.div>
    </div>
 </div>
        )
    }
}
Login.propTypes={
    loginUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
//map the state with props
const mapStateToProps=(state)=>({
    //same in index.js file auth:
    //you can put any at (auth:) to access its properties and her using auth state by state.auth
    auth:state.auth,
    errors:state.errors

});

export default connect(mapStateToProps,{loginUser})(Login);
