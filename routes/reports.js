"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')



module.exports = (knex) => {

  router.get("/", (req, res, next) => {
    knex
      .select(
      'users.first_name', 
      'users.last_name', 
      'users.phone_number', 
      'users.policy_number', 
      'users.license_number', 
      'vehicles.make', 
      'vehicles.model', 
      'vehicles.year', 
      'vehicles.damage', 
      'description', 
      'reports.id', 
      'reports.created_at', 
      'reports.status',
      'witnesses.first_name as witnesses_first_name', 
      'witnesses.last_name as witnesses_last_name', 
      'witnesses.testimony as witnesses_testimony', 
      'media.uri'
    )
      .from('reports')
      .innerJoin('vehicles', 'reports.vehicle_id', '=', 'vehicles.id')
      .innerJoin('users', 'reports.user_id', '=', 'users.id')
      .innerJoin('witnesses', 'witnesses.report_id', 'reports.id')
      .leftJoin('media', 'media.report_id', 'reports.id')
      .then((results) => {
        res.json(results)
      });
  });
  
  router.put("/:id/status", (req, res, next) => {
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