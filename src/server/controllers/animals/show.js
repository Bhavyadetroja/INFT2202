// Import Animal model
import Animal from '../../models/Animal.js';

// Controller method to handle requests for individual animal details
const showAnimalDetails = async (req, res, next) => {
    try {
        // Fetch details of the specific animal based on its name
        const animal = await Animal.findOne({ name: req.params.name });
        
        // If animal not found, return 404
        if (!animal) {
            return res.status(404).send('Animal not found');
        }

        // Render the show.ejs view with the fetched animal data
        res.render('animals/:name');
    } catch (error) {
        // Handle errors
        next(error);
    }
};

export default showAnimalDetails;
