"use strict"; // Added b/c of linter. However, validator says to put it inside the function. What's the purpose of this?

(function () {
  // Browser check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('querySelector or addEventListener not available');
    return;
  }

  // Value cleaning functions
  function clean_name(value) {
    // For names, only remove whitespace from sides and if there are multiple space inside text (ie: '  a  d    s ' -> 'a d s')
    value = value.replace(/^ +/g, '');
    value = value.replace(/ +$/g, '');
    return value.replace(/  +/g, ' ');
  }

  function clean_email(value) {
    return value.replace(/ +/g, '');
  }

  // Validation functions
  // General validation check
  function validate(value, regex) {
    if (typeof(regex.test) === 'function') {  // Check if valid regex
      // If true, use regex to test the value
      return regex.test(value);
    } else {
      return false;
    }
  }

  function validate_name(value) {
    return validate(clean_name(value), /^[a-zA-Z-]+( [a-zA-Z-]+)*$/g);
  }

  function validate_email(value) {
    return validate(clean_email(value), /^\w+@\w+(\.\w+)+$/g);
  }

  // Event Listeners
  // When DOM is loaded, disable submit
  document.addEventListener('DOMContentLoaded', function() {
    var interest_form = document.querySelector('#interestlist');
    var interest_submit = document.querySelector('#signup');
    var contact_name = document.querySelector('#name');
    var contact_email = document.querySelector('#email');
    var name_label = document.querySelector('#name-label');
    var email_label = document.querySelector('#email-label');
    name_label.innerHTML += ' <b class="error"></b>';
    email_label.innerHTML += ' <b class="error"></b>'; // Enter your email address where we can contact you.

    console.log('DOM loaded');
    // Disable submit button
    interest_submit.setAttribute('disabled', 'disabled');
    console.log('Submit button disabled');

    // Set up listener for any changes in the form using keyup
    interest_form.addEventListener('keyup', function() {
      var name_value = contact_name.value;
      var email_value = contact_email.value;
      var name_error = document.querySelector('#name-label .error');
      // var email_error = document.querySelector('#email-label .error');
      console.log('keyup');

      // Check if both fields are valid
      if (validate_name(name_value) && validate_email(email_value)) {
        // Enable the submit button with valid name and email
        if (interest_submit.hasAttribute('disabled')) {
          interest_submit.removeAttribute('disabled');
          console.log('Submit button enabled');
        }
      } else {
        // Else, keep the submit button disabled
        if (!interest_submit.hasAttribute('disabled')) {
          interest_submit.setAttribute('disabled', 'disabled');
          console.log('Submit button disabled');
        }
      }

      // Display error message for invalid name
      if (!validate_name(name_value)) {
        console.log('Invalid name');
        name_error.innerText = 'Enter your name using only letters.';
      } else {
        console.log('Valid name');
        name_error.innerText = '';
      }

      // Display error message for invalid email

    });
  });
}());
