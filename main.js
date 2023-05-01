// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll(".like-glyph");
const errorModal = document.querySelector("#modal");

function handleHeartClick(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch(() => {
      errorModal.classList.remove("hidden");
      const errorMessage = errorModal.querySelector("#modal-message");
      errorMessage.textContent = "Random server error. Try again.";
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 5000);
    });
}

likeButtons.forEach((button) => {
  button.addEventListener("click", handleHeartClick);
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
