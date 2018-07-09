"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res, next) => {
    knex.select('*').from('users')
      .then((results) => {
        res.json(results)
      })
      .catch((e) => {
        res.status(500).send(e);
      })
  });

  router.get("/:id", (req, res, next) => {
    knex.select('*').from('users')
      .where('id', '=', req.params.id)
      .then((results) => {
        res.json(results)
      })
      .catch((e) => {
        res.status(500).send(e);
      })
      
  });

  router.get("/:id/reports", (req, res, next) => {
    console.log(req.params.id)
    knex('reports')
    .select(
      'vehicles.make',
      'vehicles.model',
      'vehicles.year',
      'vehicles.plate',
      'vehicles.damage',
      'vehicles.id as vehicleid',
      'description',
      'reports.id',
      'reports.created_at',
      'reports.status',
    )
    .from('reports')
    .where('reports.user_id', req.params.id)
    .leftJoin('vehicles', 'reports.vehicle_id', '=', 'vehicles.id')
    .then((results) => {
      res.json(results)
    }).catch((err) => {
      res.json(err)
    })
  });

  router.get("/:id/vehicles", (req, res, next) => {
    knex.select('*').from('vehicles')
      .where('user_id', '=', req.params.id)
      .then((results) => {
        res.json(results)
      })
      .catch((e) => {
        res.status(500).send(e);
      })
      
  });
  return router
}