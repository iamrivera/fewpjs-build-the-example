// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// let errorModal = document.getElementById('modal');
// errorModal.setAttribute('class', 'hidden');

let heartIcons = document.querySelectorAll('.like-glyph');

heartIcons.forEach(function(heartIcon){
  heartIcon.addEventListener('click',function(){
    mimicServerCall().catch(function(error){
      setTimeout(heartTimer, 5000);
      errorModal.innerHTML = "Ruh Roh Shaggy!";
    });
    if (heartIcon.innerHTML == EMPTY_HEART) {
      heartIcon.innerHTML = FULL_HEART
    } else if (heartIcon.innerHTML == FULL_HEART) {
      heartIcon.innerHTML = EMPTY_HEART
    }
  })
});

function heartTimer() {
  errorModal.setAttribute('class', '')
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
