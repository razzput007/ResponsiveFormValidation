
var firstName= document.getElementById("fname");

var firstNameValidation=function(){

   firstNameValue=firstName.value.trim(); 
   console.log(firstNameValue);
   validFirstName=/^[A-Za-z]+$/;
   firstNameErr=document.getElementById('first-name-err');

   if(firstNameValue=="")
   {
    firstNameErr.innerHTML="First Name is required";

   }else if(!validFirstName.test(firstNameValue)){
     firstNameErr.innerHTML="!!First Name must be only string without white spaces";
   
   }
   else if(firstNameValue.length<3 || firstNameValue.length>15){
    firstNameErr.innerHTML="!!First name should have at least 3 characters";
   }
   else{
    firstNameErr.innerHTML="";
     return true;
    
   }
}

firstName.oninput=function(){
   
   firstNameValidation();
}

  
  var lastName= document.getElementById("lname");

  var lastNameValidation= function(){

   lastNameValue=lastName.value.trim(); 
   validLastName=/^[A-Za-z]+$/;
   lastNameErr=document.getElementById('last-name-err');

   if(lastNameValue=="")
   {
    lastNameErr.innerHTML="Last Name is required";

   }else if(!validLastName.test(lastNameValue)){
     lastNameErr.innerHTML="!!Last Name must be only string without white spaces";
   }else{
     lastNameErr.innerHTML="";
     return true;
   }
  }

lastName.oninput=function(){

   lastNameValidation();
}



var emailAddress= document.getElementById("email");;
var emailAddressValidation= function(){

 emailAddressValue=emailAddress.value.trim(); 
  validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailAddressErr=document.getElementById('email-err');

  if(emailAddressValue=="")
  {
   emailAddressErr.innerHTML="Email Address is required";

  }else if(!validEmailAddress.test(emailAddressValue)){
    emailAddressErr.innerHTML="!!Email Address must be in valid formate with @ symbol";
  }
  else if(emailAddressValue.length<20){
    emailAddressErr.innerHTML="!!Email Address length should not less than 19 characters";
  }
  else{
    emailAddressErr.innerHTML="";
    return true;
  }

}

emailAddress.oninput=function(){

  emailAddressValidation();
}


// Mobile Number Validation
var mobileNumber= document.getElementById("phone");

var mobileNumberValidation = function(){

  mobileNumberValue=mobileNumber.value.trim(); 
  validMobileNumber=/^[0-9]*$/;
  mobileNumberErr=document.getElementById('mobile-number-err');

  if(mobileNumberValue=="")
  {
   mobileNumberErr.innerHTML="Mobile Number is required";

  }else if(!validMobileNumber.test(mobileNumberValue)){
    mobileNumberErr.innerHTML="Mobile Number must be a number";
  }else if(mobileNumberValue.length!=10){

     mobileNumberErr.innerHTML="Mobile Number must have 10 digits";
  }
  else{
    mobileNumberErr.innerHTML="";
    return true;
  }

}
mobileNumber.oninput=function(){

  mobileNumberValidation();
}


// Password Validation
var password= document.getElementById("password");;

var passwordValidation = function(){

  passwordValue=password.value.trim(); 
   validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   
   passwordErr=document.getElementById('password-err');

   if(passwordValue=="")
   {
    passwordErr.innerHTML="Password is required";
   }else if(!validPassword.test(passwordValue)){
     passwordErr.innerHTML="Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
   }
   else{
     passwordErr.innerHTML="";
     return true;
   }
}

password.oninput=function(){

   passwordValidation();

 confirmPasswordValidation();
   
}