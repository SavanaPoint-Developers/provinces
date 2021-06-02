import { provinceSchema } from '../models/provinces.js'
import { allSchema } from '../models/all.js';
import { Slugify } from '../utils/Slugify.js'

export const getAllProvi = async (req, res) =>
{
    const all = await allSchema.find();
     return res.json(all)
}


export const getAllProviName = async (req, res) =>
{
    const provinces = await provinceSchema.find();
    
        return res.json(provinces)
     
}




export const createProvi = async (req, res) =>
{
    const { province, districts } = req.body;

    try
    {
        const all = new allSchema({
            name: await Slugify(province),
            province,
            districts
        });
    
        const response = await all.save();
    
        return await res.json(response)
    } catch (error)
    {
        return res.json(error)
   }

}




export const createWithoutDetails = async (req, res) =>
{
    const { province } = req.body;

    try
    {
        const provinces = new provinceSchema({
            name: await Slugify(province),
            province,
            
        });
    
        const response = await provinces.save();
    
        return await res.json(response)
    } catch (error)
    {
        return res.json(error)
   }

}