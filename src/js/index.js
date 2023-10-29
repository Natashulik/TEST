import VMasker from 'vanilla-masker';
import { sendForm } from "./module";
import "../scss/index.scss";

const form = document.querySelector(".form");
const fields = document.querySelectorAll(".input");
const nameField = document.querySelector(".input_name");
const emailField = document.querySelector(".input_email");
const phoneField = document.querySelector(".input_phone");
const messageField = document.querySelector(".textarea");
const helpButton = document.querySelector(".button_help");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup");


nameField.addEventListener("input", validateName);
phoneField.addEventListener("input", validatePhone);
messageField.addEventListener("input", validateMessage);

VMasker(document.querySelector(".input_phone")).maskPattern("(999) 999-99-99");

function validateName() {
    const nameValue = nameField.value.trim();
    if (nameValue === "") {
        nameField.classList.add("error");
        nameField.nextElementSibling.innerText = "Введите имя";
      return false;
    } else {
        nameField.classList.remove("error");
        nameField.nextElementSibling.innerText = "";
      return true;
    }
  }

  function validateEmail() {
    const emailValue = emailField.value.trim();
    const emailRule = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRule.test(emailValue)) {
        emailField.classList.add("error");
        emailField.nextElementSibling.innerText = "Введите корректный email";
      return false;
    } else {
        emailField.classList.remove("error");
        emailField.nextElementSibling.innerText = "";
      return true;
    }
  }


     function validatePhone() {
     const phoneValue = phoneField.value.trim();
    if (phoneValue === "") {
        phoneField.classList.add("error");
        phoneField.nextElementSibling.innerText = "Введите телефон";
      return false;
    } else {
        phoneField.classList.remove("error");
        phoneField.nextElementSibling.innerText = "";
      return true;
    }
  }

  function validateMessage() {
    const messageValue = messageField.value.trim();
    if (messageValue === "") {
        messageField.classList.add("error");
        messageField.nextElementSibling.innerText = "Введите сообщение";
      return false;
    } else {
        messageField.classList.remove("error");
        messageField.nextElementSibling.innerText = "";
      return true;
    }
  }

  function validateForm() {
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidPhone = validatePhone();
    const isValidMessage = validateMessage();
    return isValidName && isValidEmail && isValidPhone && isValidMessage;
  }


  function clearForm() {
    fields.forEach(field => {
      field.value = "";
    });
  }
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
     sendForm();
      console.log('Форма отправлена');
      clearForm();
    }
  });


  helpButton.addEventListener('click', function() {
    popup.classList.add('open');
  })

  popupClose.addEventListener('click', function() {
    popup.classList.remove('open');
  })