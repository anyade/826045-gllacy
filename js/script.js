var linkFeedback = document.querySelector(".modal-open-button");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = popupFeedback.querySelector(".modal-close");
var respondent = popupFeedback.querySelector("[name=name]");
var email = popupFeedback.querySelector("[name=email]");
var feedback = popupFeedback.querySelector("[name=feedback-text]");
var formFeedbackSubmit = popupFeedback.querySelector("[type=submit]");
var overlay = document.querySelector(".modal-overlay");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

linkFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show");
  popupFeedback.classList.remove("modal-error");
  overlay.classList.add("overlay-show");

  respondent.focus();
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
  popupFeedback.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

formFeedbackSubmit.addEventListener("click", function (evt) {
  if (!email.value || !feedback.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("modal-error");
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    
    if (popupFeedback.classList.contains("modal-show")) {
      popupFeedback.classList.remove("modal-show");
    }

    if (overlay.classList.contains("overlay-show")) {
      overlay.classList.remove("overlay-show");
    }
  }
});