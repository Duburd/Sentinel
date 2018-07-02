"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res, next) => {
    knex.select('*').from('reports')
    .then((results) => {
      res.json(results)
    });

  });
  return router
}

