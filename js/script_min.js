var linkFeedback=document.querySelector(".modal-open-button"),popupFeedback=document.querySelector(".modal-feedback"),closeFeedback=popupFeedback.querySelector(".modal-close"),respondent=popupFeedback.querySelector("[name=name]"),email=popupFeedback.querySelector("[name=email]"),feedback=popupFeedback.querySelector("[name=feedback-text]"),formFeedbackSubmit=popupFeedback.querySelector("[type=submit]"),overlay=document.querySelector(".modal-overlay"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("email")}catch(e){isStorageSupport=!1}linkFeedback.addEventListener("click",function(e){e.preventDefault(),popupFeedback.classList.add("modal-show"),popupFeedback.classList.remove("modal-error"),overlay.classList.add("overlay-show"),respondent.focus()}),closeFeedback.addEventListener("click",function(e){e.preventDefault(),popupFeedback.classList.remove("modal-show"),popupFeedback.classList.remove("modal-error"),overlay.classList.remove("overlay-show")}),formFeedbackSubmit.addEventListener("click",function(e){email.value&&feedback.value||(e.preventDefault(),popupFeedback.classList.remove("modal-error"),popupFeedback.offsetWidth=popupFeedback.offsetWidth,popupFeedback.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupFeedback.classList.contains("modal-show")&&popupFeedback.classList.remove("modal-show"),overlay.classList.contains("overlay-show")&&overlay.classList.remove("overlay-show"))});