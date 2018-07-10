"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.post("/session", (req, res, next) => {
    knex('admin')
    .select('*')
    .where('email', '=', req.body.policyNum)
    .where('password', '=', req.body.pwd)
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