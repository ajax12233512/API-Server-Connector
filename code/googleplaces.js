import { Client, PlaceInputType }from '@googlemaps/google-maps-services-js'
const key = process.env.MAPS_KEY
const client = new Client();

export const testGoogle = () =>{
   return client
  .findPlaceFromText({
    params: {
        input: "Ballard Street Cafe",
        inputtype: PlaceInputType.textQuery,
        key: key,
        fields: ["place_id", "name", "formatted_address"],
    },
  })
  .then(r => {
    const id = r.data.candidates[0].place_id;
    client.placeDetails({
        params : {
            place_id: id,
            key: key
        }
    }).then(r => {
        console.log(r.data.result)
    })
  })
  .catch(e => {
    console.log(e)
  });
}


// console.log(process.env.MAPS_KEY)
// placeQuery();