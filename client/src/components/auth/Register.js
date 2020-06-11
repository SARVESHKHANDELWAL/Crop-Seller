import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { motion } from "framer-motion";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registeruser} from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import showcase2 from '../../img/showcase2.jpg';




 class Register extends Component {
     constructor(){
         super();
         this.state={
             name:'',
             number:'',
             password:'',
             password2:'',
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
     componentWillReceiveProps(nextProps){
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
         const newUser={
             name:this.state.name,
             number:this.state.number,
             password:this.state.password,
             password2:this.state.password2
         };
         //action called by this.props
         //here this.props.history will allow as to redirect within action
         //withRouter is for using props with the actions 
         this.props.registeruser(newUser,this.props.history);
         /*for fetching the route in backent from frontent components
         we can also use fetchapi() method of react lib*/
         //console.log(newUser);
         
     }
    render() {
        //same mean as {}=this.state.eroors same for user also
        const {errors}=this.state;
        
         
        return (
            <div>
              <div className="register">

              <motion.div initial={{opacity:0,x:-100}}
            animate={{ opacity:1,x:0 }}
              transition={{ 
              duration:3,
              }} className="container">
              
              <div className="row">
              <div className="col-md-8 col-sm-12 m-auto" > 
              <h1 className="display-4 text-center heading"  style={{color:"black"}}>Sign Up</h1>
              <p className="lead text-center heading" style={{color:"black"}}>Create your CropSeller Account</p>
              <form onSubmit={this.onSubmit}>
               <i class="fa fa-user icon"></i>
              <TextFieldGroup 
                    placeholder="Name"
                    name= "name"
                    type="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}/>
              <i class="fa fa-mobile icon"></i>
           

              <TextFieldGroup 
                    placeholder="Mobile Number"
                    name= "number"
                    type="text"
                    value={this.state.number}
                    onChange={this.onChange}
                    error={errors.number}
                    info="This site uses mobile number as login so please enter a valid mobile number"
                    />
             <i class="fa fa-key icon"></i>
             <TextFieldGroup 
                    placeholder="Password"
                    name= "password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}/>
                <i class="fa fa-unlock icon"></i>
              <TextFieldGroup 
                    placeholder=" Confirm Password"
                    name= "password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}/>
             <input type="submit" className="btn submitbutton btn-success btn-block mt-4"/>
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
Register.propTypes={
    registeruser:PropTypes.func.isRequired,
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

//registerUser is action as second parameter
//mapStateToProps is to get State
//CONNECTING COMPONENT TO REDUX by using connect 
export default connect(mapStateToProps,{registeruser})(withRouter(Register));
