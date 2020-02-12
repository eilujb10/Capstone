console.log("This is the login script!");

document.getElementById("sign-up-btn").setAttribute('onclick', "signUpBtnClick()");
let signUpBtnClick = () => {
  window.location.replace("http://localhost:3000/create-account");
}

function validate(){
  let errors=false;
  let error_msg="That is false";
  let username = document.forms.loginForm.username.value;  
  let pass = document.forms.loginForm.pass.value;  


  setTimeout(function() {window.location.replace("http://localhost:3000/")});
}

