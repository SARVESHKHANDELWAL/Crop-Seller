const Validator=require('validator');
const isEmpty=require('./is-empty');

module.exports=function validateRegisterInput(data) {
    let errors={};
    //for empty fields in register inputs
    data.name=!isEmpty(data.name) ? data.name :'';
    data.number=!isEmpty(data.number) ? data.number :'';
    data.password=!isEmpty(data.password) ? data.password:'';
    data.password2=!isEmpty(data.password2) ? data.password2 :'';

    //for length validation
    if(!Validator.isLength(data.name,{min:2,max:30})){
        errors.name='Name must be between 2 and 30 characters';
    }
    //for name field is not empty
    if(Validator.isEmpty(data.name)){
        errors.name='name field is required';
    }
    //for email field is not empty
    if(Validator.isEmpty(data.number)){
        errors.number='Number field is required';
    }
      //for number is not valid
      //var number=new Regex("^[7-9][0-9]{9}$");

      //for length validation
    if(!Validator.isLength(data.number,{min:10,max:10})){
        errors.number='Mobile Number is Invalid';
    }
    if(!Validator.isMobilePhone(data.number)){
        errors.number='Mobile Number is  Invalid';
    }
      //for password field is not empty
    if(Validator.isEmpty(data.password)){
        errors.password='Password field is required';
    }
      //for password length max,min
    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password='Password must have at least of 6 digits';
    }
      //for password2 field is not empty
    if(Validator.isEmpty(data.password2)){
        errors.password2='Confirm Password field is required';
    }
      //compare the  password and confirm password fields
    if(!Validator.equals(data.password,data.password2)){
        errors.password2='Confirm Password does not match';
    }
    
   return{
       errors:errors,
       isValid:isEmpty(errors)
   } 
}