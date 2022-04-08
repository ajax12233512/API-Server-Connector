import 'dotenv/config'; //Dotenv will only work in this folder. Intialize in other folders to use env variable
import express from 'express'
import { duffel } from './code/duffel.mjs';
import { testGoogle } from './code/googleplaces.js';
const app = express();

const port = process.env.PORT || 3001;

//Function to test Duffel API intergration
const testDuffel = async () => {
    try{
        const request = await duffel.aircraft.get('arc_00009VMF8AhXSSRnQDI6Hi')
        console.log('request', request);
    } catch(err) { 
        console.log('err', err)
    }
}

// testDuffel(); //Test Duffel A
testGoogle();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

