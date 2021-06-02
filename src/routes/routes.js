import express from 'express';
import { getAllProvi, createProvi, createWithoutDetails, getAllProviName } from '../services/contry.service.js';


export const router = express.Router();


router.get('/all', getAllProvi);

router.get('/province-name', getAllProviName);

router.post('/all', createProvi)

router.post('/province-name', createWithoutDetails)


