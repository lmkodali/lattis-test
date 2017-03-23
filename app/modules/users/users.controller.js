var users = require('./users.model');

module.exports.singUp = function(req, res, next) {
  var user = req.body; 
  users.create(user)
    .then(newUser => {
      let result = {
        newUser : newUser,
        message : `New user ${newUser.username}, with id ${newUser.user_id} has been created.`
      }
      return res.json(result);
    }).catch(error => {
      return res.json(error);
    });
};

module.exports.userLogin = function(req, res, next) {
  let username = req.query.username;
  let password = req.query.password;  

  users.find({
    where: { 
      username : username ,
      password : password
    }
  }).then(user =>{  
    let obj = {
      user : user,
      status : 'successfully login!'
    }
    return obj
  }).catch(user => {
    let obj = {
      user : user,
      status : 'invalid credentials'
    }
    res.json(obj);
  })
}; 



module.exports.changePassword = function(req, res, next) {
  let param = req.body;  
  users.findOne({  
    username : param.username,
    password : param.password
  })
  .then(user => {
    user.updateAttributes({
      password: param.newpassword
    });
    let obj = {
      user : user,
      status : 'username or old password is incorrect!'
    }
    return res.json(obj); 
  }).catch(user => {
    let obj = {
      user : user,
      status : 'username or old password is incorrect!'
    }
    return res.json(obj);
  })


}; 

module.exports.resetPassword = function(req, res, next) {
  let param = req.body; 
  users.find({
    where: { 
      username : param.username, 
    }
  }).then(function(user){  
    let update = user.dataValues;
    update.password = '12345' 
    console.log('update',update);
    return user.updateAttributes(update);
  }).catch(user => {
    return res.json(user);
  })
}; 

module.exports.list = function(req, res, next) {
  users.findAll().then(function(usersList){
    res.json(usersList);
  }).catch(function(err){
    res.json(err);
  })
};
 


