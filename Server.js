/*const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/login', (req, res) => {

  res.json({
      token: 'test'
  });
  });
  app.listen(8080, () => console.log('Server is running on http://localhost:8080/login'));
*/
// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Create a new express application called 'app'
const app = express();

app.use(cors());
// Set our backend port to be either an environment variable or port 5000
const port =8080;

// This application level middleware prints incoming requests to the servers console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Set up the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
/*
app.get('./login', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});*/
app.get('*', (req, res) => {

  res.json({
      token: 'test'
  });
  });
app.post('*', (req, res) => {
  res.status(200).json({
      msg: 'OK'
  });
});
// Set our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));