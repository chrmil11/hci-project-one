"use strict"; // Added b/c of linter. However, validator says to put it inside the function. What's the purpose of this?

(function () {
  // Browser check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('querySelector or addEventListener not available');
    return;
  }

  // Event Listeners
  // When DOM is loaded, disable submit
  document.addEventListener('DOMContentLoaded', function() {
    var interest_form = document.querySelector('#interestlist');
    var interest_submit = document.querySelector('#signup');
    var contact_name = document.querySelector('#name');
    var contact_email = document.querySelector('#email');

    console.log('DOM loaded');
    interest_submit.setAttribute('disabled', 'disabled');
    console.log('Submit button disabled');

    interest_form.addEventListener('keyup', function() {
      var name_value = contact_name.value;
      var email_value = contact_email.value;
      console.log('keyup');

      // Check if both fields are valid
      if (name_value !== '' && email_value !== '') {
        // Enable the submit button
        if (interest_submit.hasAttribute('disabled')) {
          interest_submit.removeAttribute('disabled');
          console.log('Submit button enabled');
        }
      }
      else {
        // Else, keep the submit button disabled
        if (!interest_submit.hasAttribute('disabled')) {
          interest_submit.setAttribute('disabled', 'disabled');
          console.log('Submit button disabled');
        }
      }

    });
  });

  // Interactive flair for the form
}());
