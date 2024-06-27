function validate() {
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var project = document.forms["myForm"]["text"].value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    var valid = true;

    if (name == "") {
      document.getElementById('nameError').textContent = "Name must be filled out";
      valid = false;
    }
    if (email == "") {
      document.getElementById('emailError').textContent = "Email must be filled out";
      valid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById('emailError').textContent = "Invalid email format";
      valid = false;
    }
    if (project == "") {
      document.getElementById('textError').textContent = "Please tell me about your project";
      valid = false;
    }

    return valid;
  }