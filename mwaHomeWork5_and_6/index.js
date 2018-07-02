var express = require('express');
var router = express.Router();
const db = require('../model/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(db.findAll());
  });
  
  /* GEt by id home page. */
  router.get('/:id', function(req, res, next) {
    res.send(db.findGradeById(req.params.id));
  });
  
  
  /* POST home page. */
  router.post('/', function(req, res, next) {
    res.send(db.insertGrade(req.body));
  });
  
  /* Delete home page. */
  router.delete('/:id', function(req, res, next) {
    res.send(db.removeGrade(req.params.id));
  });
  
  
  /* Update home page. */
  router.put('/', function(req, res, next) {
    res.send(db.updateGrade(req.body));
  });
  
  module.exports = router;