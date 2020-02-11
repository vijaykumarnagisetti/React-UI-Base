const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'../../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(process.env.PORT || 80, error => {
    if (error) {
      console.error(error);
    }
    console.info(
      `==> 🌎 App Listening on ${process.env.PORT || 80} please open your browser and navigate to http://localhost:${process.env.PORT || 80}/`,
    );
  });