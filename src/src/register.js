$(document).ready(function() {

    $('#ErrorMessage').hide();

   
    function displayErrorMessage(message) {
        $('#ErrorMessage').text(message).show();
    }

  
    function validateInputFields() {
        var firstName = $('#FirstName').val();
        var lastName = $('#lastName').val();
        var email = $('#emailAddress').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

      
        if (firstName.length < 2 || lastName.length < 2) {
            displayErrorMessage('First name and last name must be at least 2 characters long.');
            return false;
        }

       
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.length < 8) {
            displayErrorMessage('Please enter a valid email address (minimum 8 characters).');
            return false;
        }

       
        if (password.length < 6 || password !== confirmPassword) {
            displayErrorMessage('Passwords must be at least 6 characters long and must match.');
            return false;
        }

       
        return true;
    }

    
    $('#registerForm').submit(function(event) {
        event.preventDefault(); 

       
        if (validateInputFields()) {
          
            $('#ErrorMessage').hide();
     
            var user = new User(
                $('#FirstName').val(),
                $('#lastName').val(),
                $('#emailAddress').val(),
                $('#password').val()
            );
            console.log(user); 

           
            $('#registerForm')[0].reset();
        }
    });
});

class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
