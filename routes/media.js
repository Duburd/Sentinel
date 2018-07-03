"use strict";

const express = require('express');
const router = express.Router();
const aws_router = require('./s3_endpoints/aws-sdk.js');


  module.exports = (knex) => {

    router.get("/", (req, res, next) => {
      knex.select('*').from('media')
        .then((results) => {
          res.json(results)
        });
    });
  // router.get("/", (req, res, next) => {
  //   res.json(aws_router);
  // });
  return router
}