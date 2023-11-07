document.addEventListener('DOMContentLoaded', (event) => {
    let counterElement = document.getElementById('counter');
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');
    let heartButton = document.getElementById('heart');
    let pauseButton = document.getElementById('pause');
    let submitButton = document.getElementById('submit');
    let commentInput = document.getElementById('comment-input');
    let commentsList = document.getElementById('list');
    let isPaused = false;
  
    let counterValue = parseInt(counterElement.textContent);
  
    function updateDisplay() {
      counterElement.textContent = counterValue.toString();
    }
  
    function incrementCounter() {
      if (!isPaused) {
        counterValue += 1;
        updateDisplay();
      }
    }
  
    plusButton.addEventListener('click', () => {
      if (!isPaused) {
        incrementCounter();
      }
    });
  
    minusButton.addEventListener('click', () => {
      if (!isPaused) {
        counterValue -= 1;
        updateDisplay();
      }
    });
  
    heartButton.addEventListener('click', () => {
      if (!isPaused) {
        let likesList = document.querySelector('.likes');
        let newLike = document.createElement('li');
        newLike.textContent = `${counterValue} has been liked`;
        likesList.appendChild(newLike);
  
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
        isPaused = true;
      }
    });
  
    pauseButton.addEventListener('click', () => {
      if (isPaused) {
        // Resume the counter
        isPaused = false;
        pauseButton.textContent = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
      } else {
        // Pause the counter
        isPaused = true;
        pauseButton.textContent = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
      }
    });
  
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      let newComment = document.createElement('li');
      newComment.textContent = commentInput.value;
      commentsList.appendChild(newComment);
      commentInput.value = '';
    });
  
    setInterval(incrementCounter, 1000);
  });