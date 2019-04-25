import mongoose, { Schema } from 'mongoose';

const Person = new Schema({
    name: String
});

export default mongoose.model('Person', Person);