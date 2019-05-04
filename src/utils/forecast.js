const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1bd69c0a0dcc37dcca70f6696aedf008/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. ' + "Today's high will be " + body.daily.data[0].temperatureHigh + ' and the low ' + body.daily.data[0].temperatureLow + ' degrees.')

        }
    })
}

module.exports = forecast

//temperature high and temperature low of the day

// body.daily.data.temperatureHigh
// body.daily.data.temperatureLow
