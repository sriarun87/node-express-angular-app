const express = require('express');
const commons = require('./common');
const router = express.Router();

router.post('/register', (req, res) => {
  console.log('DEBUG: Register Request', JSON.stringify(req.body));

  const result = req.body;

  if(result.uname && result.pass) {

    commons.userObject.uname = result.uname;
    commons.userObject.pass = result.pass;

    return res.send({
      status: 200,
      message: 'successfully registered'
    });
  }

  return res.send({
    status: 403,
    message: 'Username & Password Required'
  });

});

module.exports = router;