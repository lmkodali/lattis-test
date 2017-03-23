var locks = require('./locks.model');

module.exports.create = function(req, res, next) {
  var newlocks = req.body; 
  locks.create(newlocks)
    .then(newlocks => {
      return res.json(newlocks);
      // return `New record  ${newlocks.name}, with id ${newlocks.lock_id} has been created.`;
    }).catch(error => {
      return res.json(error);
    })
};
 
module.exports.list = function(req, res, next) {
  locks.findAll({   
  })
  .then(result => {
    return res.json(result); 
  }).catch(error => {
    return res.json(error);
  });
 
}; 

module.exports.update = function(req, res, next) {
  let id = req.query.id; 
  locks.update(newData, {where: { lock_id: id } })  
  .then(result => {
    return res.json(result); 
  }).catch(error => {
  return res.json(error);
  })
}; 

module.exports.delete = function(req, res, next) {
  let id = req.query.id; 
  locks.delete({ 
    where: { lock_id: id }
  })
  .then(result => {
    res.json(result); 
  });
}; 


