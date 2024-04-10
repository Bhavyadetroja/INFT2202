import AnimalService from './animal.service.js';

// Function to render the animal table
function renderAnimalTable(animalData) {
    // Populate the table with animal data
    const tableBody = document.getElementById('animal-table-body');
    tableBody.innerHTML = '';

    animalData.forEach(animal => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="../../../server/view/animals/show.ejs" onclick="showAnimalDetails('${animal.name}')">${animal.name}</a></td>
            <td>${animal.heads}</td>
            <td>${animal.legs}</td>
            <td>${animal.sound}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to fetch and render the details of a specific animal
async function renderAnimalDetails(animalName) {
    try {
        // Fetch the details of the specific animal
        const animalData = await AnimalService.getAnimal(animalName);

        // Render the details in the animal table
        renderAnimalTable([animalData]);
    } catch (error) {
        console.error('Error fetching animal details:', error);
    }
}

// Fetch and render the details of a specific animal (assuming animalName is provided elsewhere)
renderAnimalDetails(animalName);
