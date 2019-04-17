const express = require('express');
const router = express.Router();
const axios = require('axios');
const Data = require('../models/data');

// Meetup API
router.post('/', (req,res) => {
  axios.get(`https://api.yelp.com/v3/businesses/search?location=${req.body.location}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
   },
    params: {
      categories: 'coffeeroasteries',
 }
 }).then((result)=> {
   res.json(result.data)
}).catch((err)=> {
  res.json({err})
 })

})


module.exports = router;
