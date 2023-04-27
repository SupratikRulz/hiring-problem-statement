var express = require('express');
var router = express.Router();
// import myJson from '../database/stocktransactions.json' assert {type: 'json'};
var stocksData = require('../database/stocktransactions.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/faydaa', function (req, res) {
  try {
    let searchText = req.query.text;
    var resultData = new Set();
    
      for (let j = 0; j < stocksData.length; j++) {
        if (
          stocksData[j].name.includes("chem sell") ||
          stocksData[j].ticker.includes("chem sell") ||
          stocksData[j].sector.includes("chem sell") ||
          stocksData[j].transaction_type.includes("chem sell")
        ) {
          resultData.add(stocksData[j])
        }
      }
    
    console.log(resultData)
    // return resultData;
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
