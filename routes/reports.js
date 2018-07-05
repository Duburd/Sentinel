"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')



module.exports = (knex) => {

  router.get("/", (req, res, next) => {
    knex
      .select('users.first_name', 'users.last_name', 'description', 'reports.id', 'created_at')
      .from('reports')
      .innerJoin('users', 'user_id', '=', 'users.id')
      .then((results) => {
        res.json(results)
      });
  });
  router.put("/:id/status", (req, res, next) => {
    console.log(req.params)
    console.log(req.body)
    knex('reports')
      .where('id', '=', req.params.id)
      .update({
        status: req.body.status,
      }).then(function() {
        res.json({message: 'status updated'})
      })
  });

  return router
}