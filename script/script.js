//===========Nevigation Bar==========//
//========== ===Animation============//

window.onscroll = function () {
  headerbg();
};

function headerbg() {
  var header = document.getElementById("header");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}

//=============Change Theme==========//
//===================================//

var theme = document.getElementById("theme_button");
function change_mode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

//===========Movie Recommend==========//
//===================================//

// Retrieve the selectedGenre value from localStorage
const selectedGenre = localStorage.getItem("selectedGenre") || "action";
console.log("Selected Genre:", selectedGenre);

const preferBanners = document.querySelectorAll(".prefer-banner");

preferBanners.forEach((banner) => {
  if (banner.dataset.category === selectedGenre) {
    banner.style.display = "inline-block";
  } else {
    banner.style.display = "none";
  }
});

//=============Feedback Form==========//
//===================================//

var wrapper = document.getElementById("wrapper");
var box = document.getElementById("feedback_box");

function feedback() {
  wrapper.classList.add("active-popup");
  box.classList.add("feedback-active-popup");
}

function iconClose() {
  wrapper.classList.remove("active-popup");
  box.classList.remove("feedback-active-popup");
}

var feedbackUsername = document.getElementById("username");
var feedbackEmail = document.getElementById("email");

console.log(feedbackEmail, feedbackUsername);

//=======Feedback Validation==========//
//===================================//

function validateForm(event) {
  event.preventDefault();

  clearForm();

  var usernameInput = document.getElementById("username_input");
  const errorMessage1 = document.getElementById("error-message1");

  if (usernameInput.value.trim() === "") {
    errorMessage1.textContent = "Please enter an Username";
    errorMessage1.style.display = "block";
    usernameInput.focus();
    return false;
  } else {
    errorMessage1.style.display = "none";
  }

  var emailInput = document.getElementById("f_email");
  const errorMessage2 = document.getElementById("error-message2");
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    errorMessage2.textContent = "Please enter an email address";
    errorMessage2.style.display = "block";
    emailInput.focus();
    return false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    errorMessage2.textContent = "Invalid email address";
    errorMessage2.style.display = "block";
    emailInput.focus();
    return false;
  } else {
    errorMessage2.style.display = "none";
  }
  var ratingInput = document.querySelector('input[name="rating"]:checked');
  const errorMessage3 = document.getElementById("error-message3");

  if (!ratingInput) {
    errorMessage3.textContent = "Please select a Rating";
    errorMessage3.style.display = "block";
    return false;
  } else {
    errorMessage3.style.display = "none";
  }

  //Creating Popup Details
  var name = usernameInput.value.trim();
  var rating = ratingInput.value;
  var comments = document.getElementById("comments").value.trim();
  const feedbackSummary = `Dear ${name}, Thank you very much for your feedback. You have rated our site as ${rating} Star, and your comment was "${comments}".`;

  // Display the popup
  document.getElementById("feedback-form").reset();
  wrapper.classList.remove("active-popup");
  box.classList.remove("feedback-active-popup");
  showFeedbackSummary(feedbackSummary);
}

function clearForm() {
  const errorMessage1 = document.getElementById("error-message1");
  const errorMessage2 = document.getElementById("error-message2");
  const errorMessage3 = document.getElementById("error-message3");

  errorMessage1.style.display = "none";
  errorMessage1.textContent = "";
  errorMessage2.style.display = "none";
  errorMessage2.textContent = "";
  errorMessage3.style.display = "none";
  errorMessage3.textContent = "";
}

function showFeedbackSummary(summaryText) {
  var feedbackSummaryText = document.getElementById("feedback-summary-text");
  feedbackSummaryText.textContent = summaryText;

  var popup = document.getElementById("feedback-popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("feedback-popup");
  popup.style.display = "none";
}

//============Category Page==========//
//===================================//

const categoryButtons = document.querySelectorAll(".btn-category");
const categoryBanners = document.querySelectorAll(".category-banner");

categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Get the selected category from the data-category attribute of the button
    const selectedCategory = button.dataset.category;

    // Show/hide category banners based on the selected category
    categoryBanners.forEach((banner) => {
      if (banner.dataset.category === selectedCategory) {
        banner.style.display = "inline-block";
      } else {
        banner.style.display = "none";
      }
    });
  });
});

// Film Details Preview

var film_box = document.getElementById("film_box");

var film1 = document.getElementById("film1");
function showFilm1() {
  film1.classList.toggle("hide");
}

var film2 = document.getElementById("film2");
function showFilm2() {
  film2.classList.toggle("hide");
}

var film3 = document.getElementById("film3");
function showFilm3() {
  film3.classList.toggle("hide");
}

var film4 = document.getElementById("film4");
function showFilm4() {
  film4.classList.toggle("hide");
}

var film5 = document.getElementById("film5");
function showFilm5() {
  film5.classList.toggle("hide");
}

//============Quiz Page==============//
//===================================//
function startQuiz() {
  const quizQuestions = [
    {
      question:
        "Question 1: In the movie 'Jurassic Park,' what is the name of the island where the dinosaur theme park is located?",
      options: ["\n[1] Isla Nublar", "\n[2] Isla Sorna", "\n[3] Isla Muerta"],
      correctAnswer: "1",
    },
    {
      question:
        "Question 2: What is the name of the powerful ring that Frodo Baggins must destroy to save Middle-earth from the dark lord Sauron?",
      options: [
        "\n[1] The Ring of Power",
        "\n[2] The One Ring",
        "\n[3] The Ring of Destiny",
      ],
      correctAnswer: "2",
    },
    {
      question:
        "Question 3: In which year did the RMS Titanic sink after hitting an iceberg during its maiden voyage?",
      options: ["\n[1] 1912", "\n[2] 1921", "\n[3] 1907"],
      correctAnswer: "1",
    },
    {
      question:
        "Question 4: Who is the Norse god of thunder and the leader of the Avengers?",
      options: [, "\n[1] Loki", "\n[2] Odin","\n[3] Thor"],
      correctAnswer: "3",
    },
    {
      question:
        "Question 5: What is the name of the three-headed dog that guards the trapdoor on the third floor of Hogwarts in the first Harry Potter movie?",
      options: ["\n[1] Fluffy", "\n[2] Fang", "\n[3] Buckbeak"],
      correctAnswer: "1",
    },
  ];

  // Initialize the score
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = prompt(
      quizQuestions[i].question +
        "\nOptions: " +
        quizQuestions[i].options.join(" ")
    );

    // Cancel Option
    if (userAnswer === null) {
      alert("Quiz canceled. Your score will not be calculated.");
      return;
    }

    console.log(score);
    if (userAnswer === quizQuestions[i].correctAnswer) {
      score += 2;
    } else {
      score -= 1;
    }
  }

  let badge = "";
  if (score >= 10) {
    badge = "Gold";
  } else if (score >= 5) {
    badge = "Silver";
  } else {
    badge = "Bronze";
  }

  // Display Popup
  alert(
    "Congratulations! You have earned " +
      score +
      " points with a " +
      badge +
      " badge. Please claim the points in your next purchase."
  );
}
