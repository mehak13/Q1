// Express supports routing with either app.route(path).get(callback) or
// app.get('path', callback)

const express = require('express');
const app = express();

// app.get('path', callback) is used to define
// a single route with a single HTTP verb. 
app.get('/', (req, res) => {
    res.send('Hello Everyone');
});
app.post('/', (req, res) => {
    res.send('Data sent successfully')
});

// Alternative code for the above code 
app.route('/').get((req, res) => {
    res.send('Hello Everyone');
}).post((req, res) => {
    res.send('Data sent successfully');
});

// Chain multiple middleware functions
var hasName = function (req, res, next) {
    if (req.param('name')) {
        next();
    }
    else {
        res.send('What is your name?');
    }
};
var sayHello = function (req, res, next) {
    res.send('Hello' + req.param('name'));
};
app.get('/', hasName, sayHello);


app.listen(8000, () => {
    console.log('Server listening on port 8000...');
})