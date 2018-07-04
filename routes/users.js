"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res, next) => {
    knex.select('*').from('users')
      .then((results) => {
        res.json(results)
      })
      .catch(() => {
        res.status(500).send("oh fuck you");
      })
  });
  return router
}