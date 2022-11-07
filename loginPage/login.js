function visiblePassword() {
  var show = document.getElementById("inputNPassword");
  var eye = document.getElementById("eye1");

  console.log(show);
  if (show.type === "password") {
    show.type = "text";

    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    show.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
}
function visiblepassword() {
  var show = document.getElementById("inputCPassword");
  var eye = document.getElementById("eye");

  if (show.type === "password") {
    show.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    show.type = "password";
    j;
    hjolhj;
    eye.classList.add("fa-eye");
  }
}
function validate(e) {
  e.preventDefault();
  let userName = document.getElementById("inputUser").value;
  let email = document.getElementById("inputEmail").value;
  let newPassword = document.getElementById("inputNPassword").value;
  let conformPassword = document.getElementById("inputCPassword").value;
  let userError = document.getElementById("userError");
  let emailError = document.getElementById("emailError");
  let newPswError = document.getElementById("newPswError");
  let cpswError = document.getElementById("cpswError");

  let status1 = false;
  let status2 = false;
  let status3 = false;
  let status4 = false;

  // userName
  if (userName == "") {
    userError.innerHTML = "Please enter user name";
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(userName) === false) {
      userError.innerHTML = "Please enter a valid user name";
    } else {
      userError.innerHTML = "";
      status1 = true;
    }
  }

  // email
  if (email == "") {
    emailError.innerHTML = "Please enter Email id";
  } else {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(email) === false) {
      emailError.innerHTML = "Pleace write this abc@gmail.com ";
    } else {
      emailError.innerHTML = "";
      status2 = true;
    }
  }

  //password
  if (newPassword == "") {
    newPswError.innerHTML = "Pleace enter new password";
  } else {
    if (newPassword.length < 8) {
      newPswError.innerHTML = "Your password must be 8 charecter";
    } else {
      newPswError.innerHTML = "";
      status3 = true;
    }
  }

  if (conformPassword == "") {
    cpswError.innerHTML = "Please enter Conform password";
  } else {
    if (conformPassword.length < 8) {
      cpswError.innerHTML = "Your password must be 8 charecter";
    } else {
      if (newPassword === conformPassword) {
        newPswError.innerHTML = "";
        cpswError.innerHTML = "";
        status4 = true;
      } else {
        newPswError.innerHTML = "your password miss match";
        cpswError.innerHTML = "your password miss match";
      }
    }
  }

  //After validation navigate to home page

  if (status1 && status2 && status3 && status4 === true) {
    console.log("pass");
    location.assign("../homePage/index.html");
  } else {
    console.log("fail");
  }
}
