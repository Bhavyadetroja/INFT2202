import express from 'express';
import findAnimals from './controllers/find-animal.js';
import { readJson } from './utils/script.js';



import AboutController from './controllers/about.js'

import AnimalsController from './controllers/animals/list.js';

import  animalsRouter  from './routes/animals.js'


import mongoose from 'mongoose';


const PORT = 5000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', import.meta.dirname + '/view')
app.use(express.static(import.meta.dirname + '/../client'));
app.use('/node_modules', express.static(import.meta.dirname + '/../../node_modules'));

// steup logiing

// app.use((req, res, next))



// app.get('/', HomeController);
app.get('/about', AboutController);
app.get('/animals', animalsRouter);

// app.get('/animals', AnimalsController);
app.get('/animals/:name', AnimalsController);


// app.get('/about', (req, res) => {
//     res.writable(200 , { 'Content-Type': 'text/plain'})
//     res.end("hthis is me!!!!");
// logger.log({
//     level: 'info',
//     message: 'tester'
// })
//  })
 
// app.get('/product', async (req, res) => {
//     const json = await readJson('./server/data/products.json')
//     res.writeHead(200, { 'Content-Type': 'application/json'});
//     res.end(JSON.stringify(json));
// })
mongoose.connect('mongodb://127.0.0.1:27017/inft2202')
.then(() => console.log('Connected!'));

app.listen(PORT, ()=>{
    console.log('server is running on http://localhost:5000')
});