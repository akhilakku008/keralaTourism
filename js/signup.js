// signup.js
var email = document.getElementById("email")
var emaillab = document.getElementById("emaillabel")
var password = document.getElementById("pass")
var passlab = document.getElementById("passlabel")


email.addEventListener('input',function (){
// function validate(){
    // var regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/   **seems some runtime bug
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.value == ""){
        emaillab.innerText = "Email cannot be empty"
        emaillab.style.backgroundColor = "brown"
        emaillab.style.width = "200px" 
        
        return false;
    }
    else if(regex.test(email.value)==false){
        emaillab.innerText = "Must be a valid email"
        emaillab.style.width = "200px"
        emaillab.style.backgroundColor = "red"
        return false;
    }
    else{
        emaillab.innerText = "Your Email Address is Valid"
        emaillab.style.width = "230px"
        emaillab.style.backgroundColor = "green"
        return true;

    }
});
password.addEventListener('input',function ()
{   

   
    var passcase = document.getElementById("passcase")
    var strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    var mediumPassword = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{2,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/
//   var submit = document.getElementById("submit")
if(password.value == ""){
    passlab.innerText = "Password cannot be empty";
    passlab.style.backgroundColor = "brown"
    passlab.style.width = "225px" 
    passcase.style.color = "yellow"
    passcase.innerText = "Minimum 8 characters, at least\n one uppercase, and one lower case, must contain at least one number"
    
    return false;
}
else if(password.value.match(strongPassword)){

    passlab.style.backgroundColor = "green"
    passlab.innerText = "Strong";
    passlab.style.width="180px"
    passcase.innerText = "";
   
    
}

else if(password.value.match(mediumPassword)) {
 passlab.style.backgroundColor = "orange"
 passlab.style.width="180px"
 passlab.innerText = 'Medium'
 passcase.innerText = "One uppercase, and one lower case,\n must contain at least one number"
//  passcase.style.color = "yellow"

}

else{
 passlab.style.backgroundColor = 'red'
 passlab.style.width="180px"
 passlab.innerText = 'Poor'
 passcase.innerText = "One uppercase, and one lower case,\n must contain at least one number"
 passcase.style.color = "yellow"
}
});

var number = document.getElementById("num");
var numlabel = document.getElementById("numlabel");
var numtext = document.getElementById("numtext")
 
number.addEventListener('input',function(){
    var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(number.value == ""){
        numlabel.innerText = "Number cannot be empty";
        numlabel.style.backgroundColor = "brown"
        numlabel.style.width = "225px" 
        numtext.innerText = ""
        
        return false;
    }

  
// XXX-XXX-XXXX
  else if(number.value.match(phoneCode)){
    numlabel.innerText = "Mobile number is valid";
    numlabel.style.width = "200px"  
    numlabel.style.backgroundColor ="green";
    numtext.innerText = "";
    return true;
}

// else if(number.value.match(phoneRegexp)){   
//     numlabel.innerText = "Mobile number is valid";
//     numlabel.style.width = "200px"  
//     numlabel.style.backgroundColor ="green";
//     numtext.innerText = "";
//     return true;
// }
else{
    

    numlabel.style.backgroundColor = "red";
    numlabel.innerText = "not a valid number";
    numtext.innerText = "Accept additional 3 formats:\n XXX-XXX-XXXX, XXX.XXX.XXXX,\n XXX XXX XXXX"
    numtext.style.color="yellow"
    return false;
}
});
// var number = document.getElementById("num");
// var numlabel = document.getElementById("numlabel");
// var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// number.addEventListener('input',function(){
// // XXX-XXX-XXXX
//   if(number.value.value(phoneCode)){
//     numlabel.style.backgroundColor = "green";
//     numtext.innerText = "";
//     numlabel.innerText = "PhoneCode is valid";
//     return true;
// }

// });





