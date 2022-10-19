function visiblePassword() {
  var show = document.getElementById("inputPassword");
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
  var show = document.getElementById("inputapssword");
  var eye = document.getElementById("eye");

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
