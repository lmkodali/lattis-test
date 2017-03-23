var jwt = require('jwt-simple');
var db = require('../db');
var _ = require('lodash');
var secret = '!denied!';

module.exports.checker = function(req) {
    let token = req.token;

    // decode
    let decoded = jwt.decode(token, secret);
    console.log('decoded',decoded);

    db.getConnection(function(error, connection) {

    // Handle error after the release.
    if (error) throw error;
    let query = 'SELECT user_id,username,role_id FROM users WHERE username = "' + decoded.username + '" AND password = "' + decoded.password + '" LIMIT 1;';
    // Use the connection

    connection.query(query, function (error, results, fields) {
      // And done with the connection.
      console.log('user details endpoint with param works!');
      if(error){
        return ({results: null});
      }else{
        return ({results: 'verified'});
      }
    });
    // Don't use the connection here, it has been returned to the pool.
    connection.release();    
  });
};

