import { readFile } from 'fs/promises';

export async function readJson(filename){
    
    const filleBuffer = await readFile(filename);
     // console.log(fileBuffer);
    const fileString = filleBuffer.toString();
    // console.log(fileString);
    const fileJsonReal = JSON.parse(fileString);

    return fileJsonReal;

}
// const json = await readJson('./products.json')
// console.log(json);

// console.log(app);

// const { adam, kunz } =app;
// console.log(adam);
// console.log(kunz);