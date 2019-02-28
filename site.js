"use strict"; // Added b/c of linter. However, validator says to put it inside the function. What's the purpose of this?

(function () {
  var interest_submit = document.querySelector('#signup');

  // Browser check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('querySelector or addEventListener not available');
    return;
  }

  // Event Listeners
  // When DOM is loaded, disable submit
  document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM loaded');
    interest_submit.setAttribute('disabled', 'disabled');
    console.log('Submit button disabled');
  });

  // Interactive flair for the form

  // Listen whenever the value of either field is changed
  // If a 'valid' name and email are entered, allow user to submit
}());
