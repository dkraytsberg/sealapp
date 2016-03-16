var express = require('express');
var mongoose = require('mongoose');
var btncontroller = require('./server/buttons/button.controller');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('mongo_uri', process.env.MONGOLAB_URI || 'mongodb://localhost/test');

mongoose.connect(app.get('mongo_uri'), (err) => {
  if(err) console.log(err);
});

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/client/main'));
app.use(express.static(__dirname + '/assets/images'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/buttons/press', btncontroller.press);
app.post('/buttons/reset', btncontroller.reset);


app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
});
