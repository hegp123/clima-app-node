const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyC9ar6-dVMU_uHwkqxRMTGImT1dK5wiOcw`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log(location.formatted_address);
    // console.log(coors.lat);
    // console.log(coors.lng);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
}

module.exports = {
    getLugarLatLng
}