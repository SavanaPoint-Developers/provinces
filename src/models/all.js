import mongoose from 'mongoose';


const { Schema, model } = mongoose;

const all = new Schema({
    province: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    districts: {
        type: Object,
        required: true
    }
}, { timestamps: true });


export const allSchema = model('all', all)