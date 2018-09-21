const axios = require('axios');

const getClima = async(lat, lng) => {

    let direccion = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=74a1fee732c2abd0841bc516ff10e5ef`;
    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(encodeURL);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}