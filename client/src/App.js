import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';
import {logoutUser} from './actions/authActions';
import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

//all for cookie and session type 
//Check for Token
if(localStorage.jwtToken){
  //set auth token header auth
setAuthToken(localStorage.jwtToken);
//Decode token and get user info and exp
const decoded=jwt_decode(localStorage.jwtToken);
//Set user and isAuthenticated
store.dispatch(setCurrentUser(decoded));
//Check for Expire Token
const currentTime=Date.now()/1000;
if(decoded.exp<currentTime){
  //Logout User
  store.dispatch(logoutUser());
  //TODO:clear current profile
  //Redirect to Login
  window.location.href='/login';

}
  
}


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/" component={Landing} />
    <div className="container">
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
   
    </div>
    <Footer/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
