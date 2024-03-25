import express from 'express';
import { readJson } from './utils/script.js';
import { logger } from './utils/logging.js';

import AboutController from './controllers/about.js'

const PORT = 5000;
const app = express();

app.use(express.static('..'));

app.set('view engine','ejs');
app.set('views', import.meta.dirname + '/view')


// app.use((req,res) =>{
    //     const{url,method} = req;
//     console.log('[${new Date().toISOString()}] ${method} ${url}');
// })
// app.get('/',(req,res) => {
//     res.writeHead(200,{'Content-type': 'text/plain'});
//     res.end('Hello World!!!');
// })
logger.log({
    level:'info',
    message: 'tester'
})
app.get('/about', AboutController)
app.get('/product', async (req,res) => {
    const json = await readJson('./products.json');
    res.writeHead(200,{'Content-type': 'text/plain'});
})


app.use(express.static(import.meta.dirname + '/../client'));
app.use('/node_modules',express.static(import.meta.dirname + '/../../node_modules'));

app.listen(PORT, () => {
    console.log(`server is Running on http://localhost:${PORT}`);
});