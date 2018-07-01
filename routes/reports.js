"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

    router.get("/", (req, res, next) => {
        res.json([
          {
            id: 1,
            name: 'matt'
          },
          {
            id: 1,
            name: 'aaron'
          }
        ]);
    });
    return router
}

