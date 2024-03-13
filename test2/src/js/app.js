(function () {

    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot

    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    // Update the navbar title to say "YOUR NAME"
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    $('title').text('Detroja Bhavya - Test 2');
    $('.navbar-brand').text('Detroja Bhavya');
    const currentYear = new Date().getFullYear();
    $('.footer .container').html('&copy; ' + currentYear + ' Detroja Bhavya');

    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100

    const secondRow = $('#test-table tbody tr:eq(1)');
    secondRow.find('td:eq(2)').text('100100100');

    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body
    const newRow = $('<tr>')
    newRow.append('<td>Bhavya</td>');
    newRow.append('<td>Detroja </td>');
    newRow.append('<td>123456789</td>');
    $('#test-table tbody').append(newRow);

    // Question 4
    // remove Alice Bobberts from the table
    $('#test-table tbody tr:contains("Alice")').remove();


    // Question 5
    // add the .table-info class to your personal row
    newRow.addClass('table-info');

    // Question 6
    // remove the .table-warning class from Adam Kunz's row 

    $('#test-table tbody tr:contains("Adam")').removeClass('table-warning');


    // Question 7
    // change .table-dark to .table-success for John Doe's row
    $('#test-table tbody tr:contains("John")').removeClass('table-dark').addClass('table-success');

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.

    const mainContainer = $('<div>').addClass('container');
    $('main').append(mainContainer);

    const newCard = $('<div>').addClass('card');
    mainContainer.append(newCard);

    const cardImage = $('<img>').addClass('card-img-top').attr('data-src', 'holder.js/100px180?text=Image').attr('alt', 'Card image ');
    newCard.append(cardImage);

    const cardBody = $('<div>').addClass('card-body');
    newCard.append(cardBody);

    const cardTitle = $('<h5>').addClass('card-title').text('Bhavya Detroja');
    cardBody.append(cardTitle);

    const cardText = $('<p>').addClass('card-text').text('I would like to learn new interesting stuff.');
    cardBody.append(cardText);

})();
