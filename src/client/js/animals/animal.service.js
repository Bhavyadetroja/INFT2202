

const AnimalService = {
    // Function to fetch animal data by name from the server
    getAnimal: async function(animalName) {
        try {
            const response = await fetch('api/animals/:animalName');
            if (!response.ok) {
                throw new Error('Failed to fetch animal data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching animal data:', error);
            throw error;
        }
    }
};

export default AnimalService;
