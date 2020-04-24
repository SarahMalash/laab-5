'use strict';
// make a variable called express to use the express library
const express = require('express');
// initialize the express
const app = express();
// create a port number
const PORT = process.env.PORT || 3000;
//access any files inside the public folder
app.use(express.static('./public'));
// http://localhost:3000/test
app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));