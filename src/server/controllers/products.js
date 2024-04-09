import { readJson } from '../utils/script.js';

export default async (req, res) => {
    const json = readJson('./src/server/data/product.js')
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(json));
}