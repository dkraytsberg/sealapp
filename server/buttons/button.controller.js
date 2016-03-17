var Button = require('./button.model');
var _ = require('lodash');

function returnButtons(req, res) {
  Button.find({}, null, {sort : {'presses' : -1}}, function (err, btns) {
    if(err) res.status(404).json('find err');

    var mappedbtns = _.keyBy(btns, function (o) {
      return o.name;
    });

    res.status(200).json(mappedbtns);
  });
}

exports.press = function (req, res) {
  var button = req.query.button;
  var amount = req.query.amount;

  Button.update({"name" : button}, {$inc : {"presses": amount}}, (err, aff) => {
    if(err) res.status(404).json('update err');
  });

  returnButtons(req, res);
};

exports.reset = function (req, res) {
  Button.update({"name" : "seal"}, {$set : {"presses": 0}}, function (err, num){});
  Button.update({"name" : "notseal"}, {$set : {"presses": 0}}, function (err, num){});

  returnButtons(req, res);
}
