import express from 'express';
import showAnimalDetails from '../controllers/animals/show.js';




import AnimalsFindController from '../controllers/animals/retrieve.js'

import AnimalListView from '../controllers/animals/list.js';
import AnimalsCreateView from '../controllers/animals/create.js';
import AnimalsEditView from '../controllers/animals/edit.js';




 const animalsRouter = express.Router();


animalsRouter.get('/animals', AnimalListView);

animalsRouter.get('/animals/create', AnimalsCreateView);



animalsRouter.get('/animals/:name/edit', AnimalsEditView);
animalsRouter.get('/animals/animal.name', showAnimalDetails);



animalsRouter.get('/api/animals', AnimalsFindController);
animalsRouter.get('/api/animals/:name', AnimalsFindController);





export default animalsRouter;