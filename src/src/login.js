$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); 
        
        var username = $('#contactName').val(); 

        if(username.trim() !== '') { 
            var listItem = $('<li>', { class: 'nav-item', id: 'username' }).append(
                $('<a>', { class: 'nav-link navbar-text', href: '#', text: username })
            );

            
            $('#contact').after(listItem);
            
            listItem.after($('<li>', { class: 'nav-item' }).append($('<span>', { class: 'navbar-text', text: ' | ' })));


            $('#login').html('<a class="nav-link" href="login.html"><i class="fas fa-sign-out-alt"></i> Logout</a>');
            $('#login').attr('id', 'logout'); 
        }
    });
});
