//The use of duffel api necessitates the use of es6 modules exculsively. Idk why its just how they made it
import { Duffel } from '@duffel/api'
export const duffel = new Duffel({
    token: process.env.DUFFEL_TOKEN
})

// module.exports = duffel;



