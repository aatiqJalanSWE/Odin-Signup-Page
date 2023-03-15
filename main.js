document.addEventListener("submit", function () {
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;

  let error = document.querySelector("#error");

  if (password == "" && confirmPassword == "") {
    error.innerHTML = "*passwords does not match";
  } else if (password === confirmPassword) {
    error.innerHTML = "";
  }
});
