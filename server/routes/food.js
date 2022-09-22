const express = require('express');
const router = express.Router();

var food = require('../controllers/food.controller.js');

router.post('/create', food.create);
router.post('/update', food.update);
router.post('/delete', food.delete);
router.post('/get_user_food_daily_data', food.get_user_food_daily_data);
router.post('/update_water_amount', food.update_water_amount);
// router.post('/get_user_food_daily_data', food.get_user_food_daily_data);

router.get('/' , food.getfoods);

module.exports = router;