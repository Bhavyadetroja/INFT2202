import Animal from '../../models/Animal.js';

export default async (req,res, next)=>
{
    const query ={

    };

    const animals = await Animal.find(query).limit(20);
    res.render('animals/list', {animals});
}