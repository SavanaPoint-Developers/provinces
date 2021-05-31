import express from 'express';
import { getAllProvi } from '../services/contry.service.js';


export const router = express.Router();


router.get('/all', getAllProvi)