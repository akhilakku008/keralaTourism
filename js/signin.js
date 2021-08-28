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
    var submit = document.getElementById("submit")
   if(password.value == ""){
       passlab.innerText = "Password cannot be empty";
       passlab.style.backgroundColor = "brown"
       passlab.style.width = "225px" 
       passcase.style.color = "yellow"
    //    passcase.innerText = "Minimum 8 characters, at least\n one uppercase, and one lower case,\n must contain at least one number";
       return false;
   }
   else if(password.value.match(strongPassword)){

       passlab.style.backgroundColor = "green"
       passlab.innerText = "Strong";
    //    passlab.innerText = "Password ";
       passlab.style.width="180px"
       passcase.style.color ="cyan"
       passcase.innerText = "Password succesfully validated";
       
      
       
   }
   
 else if(password.value.match(mediumPassword)) {
    passlab.style.backgroundColor = "orange"
    passlab.style.width="180px"
    passlab.innerText = 'Medium'
    passcase.innerText = "";
}

else{
    passlab.style.backgroundColor = 'red'
    passlab.style.width="180px"
    passlab.innerText = 'Poor'
    // passcase.innerText = "One uppercase, and one lower case,\n must contain at least one number"
    // passcase.style.color = "yellow"
    passcase.innerText = "";
}
});





