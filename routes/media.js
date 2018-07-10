"use strict";

const express = require('express');
const router = express.Router();


  module.exports = (knex) => {

    router.get("/", (req, res, next) => {
      knex.select('*').from('media')
        .then((results) => {
          res.json(results)
        }).catch((err) => {
          res.json(err)
        })
    });
    router.post("/", (req, res, next) => {
      const media = req.body;
      console.log(media)
      knex('media')
        .insert({
          uri: media.uri,
          report_id:  media.report_id,
        })
        .then(function (results) {
          res.json({results})
        }).catch((err) => {
          res.json(err)
        })
    });
  return router
}