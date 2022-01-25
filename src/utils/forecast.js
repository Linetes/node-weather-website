const request = require('request');
const geocode = require('./geocode');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8a8d62ac1e1f77483bec2d3d313852ab&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.')
        }
    })
}

module.exports = forecast