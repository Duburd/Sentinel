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
    knex('reports')
    .select(
      'users.first_name',
      'users.last_name',
      'users.phone_number',
      'users.policy_number',
      'users.license_number',
      'users.id as userid',
      'vehicles.make',
      'vehicles.model',
      'vehicles.year',
      'vehicles.damage',
      'vehicles.id as vehicleid',
      'description',
      'reports.id',
      'reports.created_at',
      'reports.status',
      'witnesses.first_name as witnesses_first_name',
      'witnesses.last_name as witnesses_last_name',
      'witnesses.testimony as witnesses_testimony',
      'witnesses.id as witnessesid',
      'media.uri',
      'media.id as mediaid',
    )
    .where('user_id', '=', req.params.id)
    .leftJoin('vehicles', 'reports.vehicle_id', '=', 'vehicles.id')
    .leftJoin('witnesses', 'witnesses.report_id', 'reports.id')
    .leftJoin('media', 'media.report_id', 'reports.id')
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