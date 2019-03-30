const request = require('request');

function sometn(body) {
    console.log(body)
}

export const get_map = (payload, callback) => {
    request.post('http://localhost:8081/getMapRoutes', {form:{key:'value'}}, (error, response, body) => {
        callback(body)
    })
}

// get_map()