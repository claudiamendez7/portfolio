const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const btnDownloadCV = document.querySelector("intro__link__btn--downloadCV");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validateInputs(input.target);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    validateInputs(textarea.target);
  });
});

btnDownloadCV.addEventListener("click", () => {
  window.open("./img/downloadCV.pdf");
});

export function validateInputs(input) {
  const inputType = input.dataset.type;
  if (validators[inputType]) {
    validators[inputType](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector("input-message-error").innerHTML = "";
    showErrorMessage(inputType, input);
    input.style.background = "#FBCDBC";
  }
}

export function validateTextAreas(textarea) {
  const inputType = textarea.dataset.type;
  if (validators[inputType]) {
    validators[inputType](textarea);
  }

  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove("input-container--invalid");
    textarea.parentElement.querySelector("input-message-error").innerHTML = "";
    showErrorMessage(inputType, textarea);
    textarea.style.background = "green";
  } else {
    textarea.parentElement.classList.add("input-container--invalid");
    textarea.parentElement.querySelector("input-message-error").innerHTML =
      showErrorMessage(inputType, textarea);
    textarea.style.background = "#FBCDBC";
  }
}
const input = document.querySelector("formcontact__input");
const textarea = document.querySelector("formcontact__textarea");
const btnSubmit = document.querySelector("formcontact__btn");

btnSubmit.addEventListener("click", () => {
  if (input.value == "" && textarea.value == "") {
    alert("Message can not be sent. All fields are required.");
  } else {
    alert("Message sent successfully.");
    input.innerHTML = "";
    textarea.innerHTML = "";
  }
});

const errorTyoe = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const errorMessage = {
  name: {
    valueMissing: "Please enter your name.",
  },
  email: {
    valueMissing: "Please enter your email address.",
    typeMismatch: "Please enter a valid email address.",
  },
  subject: {
    valueMissing: "Please enter your subject.",
  },
  message: {
    valueMissing: "Please enter your message.",
  },
};

const validators = {
  birthdate: (input) => birthdateValidate(input),
};

function showErrorMessage(inputType, input) {
  let message = "";
  errorTyoe.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessage[inputType][error];
    }
  });
  return message;
}
