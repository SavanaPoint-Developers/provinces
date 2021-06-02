import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const url = process.env.MONGODB_URL_PROD;


export const connection = () =>
{
    mongoose.connect(url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }).then(() => console.log('DB is connected!'))
    .catch((error) => console.log('Something went wrong!'))
}