const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const submitBtn = document.querySelector("#login");
const toast = document.querySelector("#message");
const rememberMe = document.querySelector("#remember");

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegExp = /\!|\@|\#|\_|\-|\d{1,}/g;

const errors = {
  email: {
    empty: "Email is required.",
    invalid: "Email address is not valid.",
  },
  password: {
    empty: "Password is required.",
    length: "Password mudt be at least 8 characters.",
    secure: "Password must contain a number or special character ( ! @ # _ -)",
  },
};

const account = {
  email: "filipdaniel2000@yahoo.com",
  password: "1234qwer",
};
function handleEnableSubmitButton() {
  submitBtn.disabled = false;
  errorText.innerText = "";
}

function handleToast(message, isError) {
  toast.innerText = message;
  isError ? toast.classList.add("error") : toast.classList.remove("error");
  toast.classList.add("error");
  toast.style.top = "1rem";
  setTimeout(() => {
    toast.style.top = "-10rem";
  }, 3000);
  setTimeout(() => {
    toast.innerText = "";
  }, 3600);
}

function handleEmailValidation() {
  const { value } = email;

  if (value === "") {
    email.style.border = "0.1rem solid red";
    handleToast(errors.email.empty, true);
    return false;
  }

  if (!emailRegExp.test(value)) {
    email.style.border = "0.1rem solid red";
    handleToast(errors.email.empty, true);

    return false;
  }

  email.style.border = "0.1rem solid #ced4da";
  return true;
}

function handlePasswordValidation() {
  const { value } = pass;

  if (value === "" || value.length < 8) {
    pass.style.border = "0.1rem solid #ced4da";
    handleToast(errors.password.length, true);
    return false;
  }

  if (!passRegExp.test(value)) {
    pass.style.border = "0.1rem solid red";
    handleToast(errors.password.secure, true);
    return false;
  }

  pass.style.border = "0.1rem solid #ced4da";
  return true;
}

function handleLogInButtonClick(el) {
  el.disabled = true;
  console.log(rememberMe.checked);

  if (!handleEmailValidation() || !handlePasswordValidation()) {
    el.disabled = false;
    return;
  }

  if (email.value === account.email && pass.value === account.password) {
    handleToast("Logged in succesfully.", false);
    return;
  }

  handleToast("User not found.", true);
}
