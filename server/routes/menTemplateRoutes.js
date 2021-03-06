const express = require('express');
const router = express.Router()
const MenTemplates = require('../models/mentemplates');

router.get('/fascia/:id', (req, res) => {

  const id = req.params.id;
  MenTemplates.find({fascia_id: id})
  .exec().then(doc => {
    if(!doc){
      res.status(404).send();
    }
    res.send(doc)
  })
  .catch(error => console.log(error))
});
// Order is important. If the below route is added before all other routes 
//express will treat everything after /api/templates as the id
router.get('/:id', (req, res) => {

  const obj = req.params;
  let operation;
  if(obj.id === 'all'){
    operation = MenTemplates.find();
  }else {
    operation = MenTemplates.findOne({_id: obj.id});
  }
  operation.exec().then(doc => {
    res.send(doc);
  })
  .catch(error => console.log('Error ocurred!', error));
});

module.exports = router;

