import express from 'express';



import AnimalsFindController from '../controllers/animals/retrieve.js'
import AnimalShowView from '../controllers/animals/show.js';
import AnimalListView from '../controllers/animals/list.js';
import AnimalsCreateView from '../controllers/animals/create.js';
import AnimalsEditView from '../controllers/animals/edit.js';



 const animalsRouter = express.Router();


animalsRouter.get('/animals', AnimalListView);

animalsRouter.get('/animals/create', AnimalsCreateView);

animalsRouter.get('/animals/:name', AnimalShowView);

animalsRouter.get('/animals/:name/edit', AnimalsEditView);



animalsRouter.get('/api/animals', AnimalsFindController);
animalsRouter.get('/api/animals/:name', AnimalsFindController);




export default animalsRouter;