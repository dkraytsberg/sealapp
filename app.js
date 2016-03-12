var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/client/main'));
app.use(express.static(__dirname + '/assets/images'));
app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
});
