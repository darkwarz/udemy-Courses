var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);

router
  .route('/hotels/:hotelId') //parameter added hotelId
  .get(ctrlHotels.hotelsGetOne); // macroing hotelsGetAll

router
  .route('/hotels/new')
  .post(ctrlHotels.hotelsAddOne);
  
module.exports = router;