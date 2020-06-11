const Validator=require('validator');
const isEmpty=require('./is-empty');

module.exports=function validateLoginInput(data) {
    let errors={};
    //for empty fields in register inputs
    
    data.number=!isEmpty(data.number) ? data.number :'';
    data.password=!isEmpty(data.password) ? data.password:'';
   

   
    
    //for Mobile Number field is not empty
    if(Validator.isEmpty(data.number)){
        errors.number='Mobile Number field is required';
    }
      //for Mobile Number is not valid
    if(!Validator.isMobilePhone(data.number)){
        errors.number='Mobile Number is  invalid';
    }
      //for password field is not empty
    if(Validator.isEmpty(data.password)){
        errors.password='password  field is required';
    }
     
     
     
    
   return{
       errors:errors,
       isValid:isEmpty(errors)
   } 
}