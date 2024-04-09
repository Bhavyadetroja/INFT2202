import Animal from '../../models/Animal.js';

export default async (req, res, next) => {
    try {
        const query = {};

        if (req.params.name) {
            query.name = req.params.name;
        }

        const animals = await Animal.find(query);

        res.json(animals);
    } catch (error) {
        console.error('Error retrieving animals:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
