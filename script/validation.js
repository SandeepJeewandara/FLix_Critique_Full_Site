// First Name Validation
var fname = document.getElementById("fname");
var firstNameValidation = function () {
  firstNameValue = fname.value.trim();
  validFirstName = /^[A-Za-z]+$/;
  errorname = document.getElementById("errorname");
  if (firstNameValue == "") {
    errorname.innerHTML = "First Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    errorname.innerHTML =
      "First Name must only contain letters (No white spaces or special characters";
  } else {
    errorname.innerHTML = "";
    return true;
  }
};
fname.oninput = function () {
  firstNameValidation();
};

var lname = document.getElementById("lname");
var lastNameValidation = function () {
  lastNameValue = lname.value.trim();
  validLastName = /^[A-Za-z]+$/;
  errorname2 = document.getElementById("errorname2");
  if (lastNameValue == "") {
    errorname2.innerHTML = "Last Name is required";
  } else if (!validLastName.test(lastNameValue)) {
    errorname2.innerHTML =
      "Last Name must only contain letters (No white spaces or special characters";
  } else {
    errorname2.innerHTML = "";
    return true;
  }
};
lname.oninput = function () {
  lastNameValidation();
};

var job = document.getElementById("job");
var jobValidation = function () {
  jobValue = job.value.trim();
  validjob = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  errorname3 = document.getElementById("errorname3");
  if (jobValue == "") {
    errorname3.innerHTML = "Occupation is required";
  } else if (!validjob.test(jobValue)) {
    errorname3.innerHTML =
      "Occupation must only contain letters and white spaces (No special characters";
  } else {
    errorname3.innerHTML = "";
    return true;
  }
};
job.oninput = function () {
  jobValidation();
};

var email = document.getElementById("email");
var emailValidation = function () {
  emailValue = email.value.trim();
  validemail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  errorname4 = document.getElementById("errorname4");
  if (emailValue == "") {
    errorname4.innerHTML = "Email is required";
  } else if (!validemail.test(emailValue)) {
    errorname4.innerHTML = "Email must be in the form abc@gmail.com";
  } else {
    errorname4.innerHTML = "";
    return true;
  }
};
email.oninput = function () {
  emailValidation();
};

var phone = document.getElementById("phone");
var phoneValidation = function () {
  var phoneValue = phone.value.trim();
  var validphone =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  var errorname5 = document.getElementById("errorname5");

  if (phoneValue == "") {
    errorname5.innerHTML = "Phone number is required";
  } else if (!validphone.test(phoneValue)) {
    errorname5.innerHTML = "Please enter a valid phone number";
  } else {
    errorname5.innerHTML = "";
    return true;
  }
};

phone.oninput = function () {
  phoneValidation();
};

function validateAge() {
  var ageInput = document.getElementById("age");
  var age = +ageInput.value;

  var errorname6 = document.getElementById("errorname6");

  if (isNaN(age) || age < 1) {
    errorname6.innerHTML = "Age cannot be a negative number";
    return false;
  } else if (age < 13) {
    errorname6.innerHTML = "Minimum age is 13";
    return false;
  } else {
    errorname6.innerHTML = "";
    return true;
  }
}

function validatePassword() {
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("repass").value;

  if (password === confirmPassword) {
    // Passwords match, clear the error messages
    document.getElementById("errorname7").textContent = "";
    document.getElementById("errorname8").textContent = "";
  } else {
    // Passwords do not match, display error messages
    document.getElementById("errorname7").textContent =
      "Passwords do not match";
    document.getElementById("errorname8").textContent =
      "Passwords do not match";
  }
}


function validateMaxResultList() {
    var resultInput = document.getElementById("maxresultlist");
    var result = +resultInput.value;
  
    var errorname9 = document.getElementById("errorname9");
  
    if (isNaN(result) || result < 1) {
      errorname9.innerHTML = "Number cannot be a negative number";
      return false;
    } else if (result > 5) {
      errorname9.innerHTML = "Maximum is 5";
      return false;
    } else {
      errorname9.innerHTML = "";
      return true;
    }
  }


 
  
  function validateMaxProductList() {
    var productInput = document.getElementById("maxproductlist");
    var product = +productInput.value;
  
    var errorname10 = document.getElementById("errorname10");
  
    if (isNaN(product) || product < 1) {
      errorname10.innerHTML = "Number cannot be a negative number";
      return false;
    } else if (product > 5) {
      errorname10.innerHTML = "Maximum is 5";
      return false;
    } else {
      errorname10.innerHTML = "";
      return true;
    }
  }

// JavaScript code for the 4th page (signup4.html)
// window.addEventListener("load", function () {
//   document.getElementById("application4").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Retrieve the first name from localStorage
//     var fName = localStorage.getItem("firstName");

//     // Do whatever you want with the first name from the 1st page
//     // For example, display an alert message
//     alert("Dear " + fName + ", Thank you for registering with us, your recommended results will be shown in a while.");
//   });
// });

// function popup(){
//   var name = document.getElementById('fname').value;
//   var localname = name;
//   alert("Dear Thank you for registering with us, your recommendations will display shortley");

// }

// function pooopop(){
//   const form = document.getElementById('form');
//   form.addEventListener('submit',event => {
//     event.preventDefault();
//     const first = document.getElementById('fname').value;
//     alert("${first}")

//   }

// }};

// function hi(){
//   var name = document.querySelector('input[name="name"]').value;
//   alert('Welcome, ' + name);
// }

