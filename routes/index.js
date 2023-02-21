var express = require('express');
var router = express.Router();


const List = require('../models/List');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const allList = await List.find({});
    res.json({listName: allList});
    
      } catch(e){
    
    console.log(e);
    
      }
});
