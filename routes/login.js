const express = require('express');
const speakeasy = require('speakeasy');
const commons = require('./common');
const router = express.Router();


router.post('/login', (req, res) => {
  console.log('DEBUG: Login Request', JSON.stringify(req.body));

  if(commons.userObject.uname && commons.userObject.pass) {
    if(req.body.uname === commons.userObject.uname && req.body.pass === commons.userObject.pass) {
      return res.send({
        status: 200,
        message: 'success'
      });
    }
    return res.send({
      status: 400,
      message: 'Invalid username or password'
    });
  }
});

module.exports = router;