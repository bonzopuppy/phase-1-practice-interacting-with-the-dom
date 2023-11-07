For the counter, we want to increment it every second
-establish a variable COUNTER to represent the textContent of the h1 element with the id=counter
-pass the variable into a function that increments the counter
-use that function in setInterval
-place the return of the function into the h1 element


For the plus and minus buttons, we want to increment / decrement on click 
-set up event handlers on click for each of the buttons
-on click, they should call the function that increments the counter
-the return of that function goes into the h1 element


For the heart button, we want to capture the value of the counter on click and display in the DOM
-set up an event handler for the heart
-on Click, it will capture the value of the counter
-on Click, it will disable the plus, minus, and heart buttons
-on Click, it will change the pause button to resum


Clicking resume will restart the counter and re-enable the buttons
-set up an event handler for the resume button
-on click, it will increment the counter
-on click it will also enable the plus, minus, and heart buttons

For the comments section, clicking submit in the form will submit the comment and place it above in a list element
-set up an event handler for the submit button
-on click, it should take the input from the form and place it in a list item in the div with the id list and class comments

_________________________

When the DOM content is fully loaded:
  Initialize counterElement by selecting the h1#counter
  Initialize buttons: plusButton, minusButton, heartButton, pauseButton, submitButton
  Initialize commentInput and commentsList by selecting their respective elements
  Initialize isPaused as false
  Initialize counterValue by converting the counterElement text to an integer

  Define a function updateDisplay to set the counterElement text to counterValue

  Define a function incrementCounter to:
    If not paused, increment the counterValue and call updateDisplay

  Add click event listener to plusButton:
    If not paused, call incrementCounter

  Add click event listener to minusButton:
    If not paused, decrement counterValue and call updateDisplay

  Add click event listener to heartButton:
    If not paused:
      Add a new like with the current counterValue to likes list
      Disable plusButton, minusButton, and heartButton
      Change pauseButton text to 'resume'
      Set isPaused to true

  Add click event listener to pauseButton:
    Toggle isPaused state
    If paused:
      Change pauseButton text to 'resume'
      Disable plusButton, minusButton, and heartButton
    Else:
      Change pauseButton text to 'pause'
      Enable plusButton, minusButton, and heartButton

  Add click event listener to submitButton:
    Prevent default form submission
    If commentInput is not empty:
      Create a new list item with the comment text
      Append the new list item to commentsList
      Clear commentInput

  Every second, call incrementCounter

End
