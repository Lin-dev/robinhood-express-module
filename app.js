var express = require('express')
var app = express()
var dotenv = require('dotenv');
dotenv.config();
var cors = require('cors');
var bodyParser = require('body-parser');
var finance = require('./api/finance.js');
app.use(cors());
app.use(bodyParser());
var Robinhood = require('robinhood');



app.get('/stock/:q',function(request,response){
   finance.stockSearch(request.params.q).then(function(info){
      response.json(info);
   });
});

app.get('/user',function(request,response){
   finance.rbhoodUser().then(function(info){
      response.json(info);
   });
});

app.listen(3000)


//optional model to implement
// app.get('/profile', function(req,res){
//
//    client.investment_profile(function(err, response, body){
//       res.send(body);
//    })
//
// });
