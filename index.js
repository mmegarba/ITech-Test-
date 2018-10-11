

function reset(){

  document.getElementById("myForm").reset();

}



function validation(){

var email = document.getElementById("email").value;
var emailConfirmation = document.getElementById("emailConfirmation").value;



if(email != emailConfirmation){


alert("Emails Do not Match!");

}

}
