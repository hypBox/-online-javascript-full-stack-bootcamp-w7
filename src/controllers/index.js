'use strict';
const express = require('express');
const router = express.Router();

// Todo: you can add your endpoint like /profile or /contact-info

router.get('/', (request, response) => {
  const res = {ok: true};
  response.json(res);
});

router.get('/contact-info', (request, response) => {
  const res = {
    firstName: 'my first name',
    lastName: 'my last name',
    email: 'myemail@example.com'
  };
  response.json(res);
});



module.exports = router;