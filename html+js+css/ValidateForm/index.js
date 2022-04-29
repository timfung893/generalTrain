const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

// show error message
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

//  show success
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

// check if input is empty

function checkEmptyErr(inputList) {
  let isEmpty = false;
  inputList.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmpty = true;
      showError(input, "Do not leave this field empty");
    } else {
      showSuccess(input);
    }
  });

  return isEmpty;
}

// check email
function checkEmailErr(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);

  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is invalid");
  }

  return isEmailError;
}

// check length

function checkLengthErr(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `The minimum number of letters is ${min}`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `The maximum number of letters is ${max}`);
    return true;
  }

  showSuccess(input);
  return false;
}

// check password confirm

function checkPasswordErr(password, cfpassword) {
  if (password.value !== cfpassword.value) {
    showError(cfpassword, "Password is not the same");
    return true;
  }

  return false;
}

//  on submit

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   check empty
  let isEmpty = checkEmptyErr([username, password, email, confirmPassword]);

  //   check email error
  let isEmailError = checkEmailErr(email);

  //   check length
  let isUsernameLengthErr = checkLengthErr(username, 8, 16);
  let isPasswordLengthErr = checkLengthErr(password, 8, 20);

  //   check password match
  let isPasswordErr = checkPasswordErr(password, confirmPassword);

  if (
    isEmpty ||
    isEmailError ||
    isUsernameLengthErr ||
    isPasswordLengthErr ||
    isPasswordErr
  ) {
    //   do nothing
  } else {
    //  call api...
  }
});
