import mongoose from "mongoose";
import Animal from '../models/Animal.js';

const findAnimals = async (req, res, next) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/inft2202');
        console.log('Connected to MongoDB!');

        const animals = await Animal.find({});
        res.json(animals);
        console.log(animals); // This line will never execute after sending the response
    } catch (error) {
        console.error('Error connecting to MongoDB or fetching animals:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default findAnimals;
