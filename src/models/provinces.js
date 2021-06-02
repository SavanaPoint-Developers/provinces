import mongoose from 'mongoose';


const { Schema, model } = mongoose;

const province = new Schema({
    province: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    
}, { timestamps: true });


export const provinceSchema = model('province', province);