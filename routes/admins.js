"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/session", (req, res, next) => {
    console.log(req.body)
    knex('admins')
    .select('*')
    .where('username', '=', req.body.username)
    .where('password', '=', req.body.password)
    .then((results, err) => {
      var message = 'user authenticated'
      if (typeof results[0] === 'undefined') {
        message = 'looks like your credentials didn\'t match up';
        results = null
      }
      res.json({
        message: message,
        user: results
      })
    }).catch((err, e) => {
      res.json({message: 'looks like your credentials didn\'t match up', err: err, e: e})
    })
  });
  return router
}