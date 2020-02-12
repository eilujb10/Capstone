console.log("This is the create account script!");

let loginBtn = document.getElementById("login-btn").setAttribute('onclick', "loginBtnClick()");

let loginBtnClick = () => {
  window.location.replace("http://localhost:3000/login");
}