//setup
 var Robinhood = require('robinhood');
 var credentials = {
     username: process.env.user,
     password: process.env.pass
 };
 var client = new Robinhood(credentials)

//model definition
 var finance = {
     stockSearch: function(searchTerm){
       return new Promise(function(resolve,reject){
          client.quote_data(searchTerm,function(err, response, body) {
              resolve(body)
           });
       });
    },
    rbhoodUser: function(){
      return new Promise(function(resolve,reject){
         client.user(function(err,response,body){
               resolve(body)
            });
      });
   }
 }

module.exports = finance;
