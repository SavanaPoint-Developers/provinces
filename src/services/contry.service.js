import Provincies from '../db/mozambique.json';


export const getAllProvi = async (req, res) =>
{
    return res.json(Provincies)
}