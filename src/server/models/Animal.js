import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const animalSchema = new Schema({
    name: String,
    legs: Number,
    heads: Number,
    sound: String
});

export default mongoose.model('Animal',animalSchema);