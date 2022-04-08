import 'dotenv/config';
import express from 'express'
import { duffel } from './code/duffel.mjs';
const app = express();

const port = process.env.PORT || 3001;

const aircraft = async () => {
    try{
        const request = await duffel.aircraft.get('arc_00009VMF8AhXSSRnQDI6Hi')
        console.log('request', request);
    } catch(err) { 
        console.log('err', err)
    }
}

aircraft();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

