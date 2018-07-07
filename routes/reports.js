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
      .from('reports')
      .leftJoin('vehicles', 'reports.vehicle_id', '=', 'vehicles.id')
      .leftJoin('users', 'reports.user_id', '=', 'users.id')
      .leftJoin('witnesses', 'witnesses.report_id', 'reports.id')
      .leftJoin('media', 'media.report_id', 'reports.id')
      .then((results) => {
        res.json(results)
      }).catch((err) => {
        res.json(err)
      })
  });

  router.put("/:id/update", (req, res, next) => {
    console.log(req.body)
    knex('reports')
      .where('id', '=', req.params.id)
      .update({
        description: req.body.data.description,
      })
      .then(function () {
        return knex('users')
          .where('policy_number', '=', req.body.data.policy_number)
          .update({
            first_name: req.body.data.first_name,
            last_name: req.body.data.last_name,
            phone_number: req.body.data.phone_number,
            license_number: req.body.data.license_number,
          })
          .then(function () {
            return knex('vehicles')
              .where('vehicles.id', '=', req.body.data.modalObj.vehicleid)
              .update({
                make: req.body.data.make,
                model: req.body.data.model,
                year: req.body.data.year,
                damage: req.body.data.damage,
              })
              .then(function () {
                res.json({
                  message: 'report updated'
                })
              }).catch((err) => {
                res.json(err)
              })
          });
      })
  });

  router.put("/:id/status", (req, res, next) => {
    knex('reports')
      .where('id', '=', req.params.id)
      .update({
        status: req.body.status,
      })
      .then(function () {
        res.json({
          message: 'status updated'
        })
      }).catch((err) => {
        res.json(err)
      })
  });

  router.post("/", (req, res, next) => {
    const report = req.body;
    console.log(report)
    knex('reports')
      .returning('id')
      .insert({
        description: report.description,
        vehicle_id:  report.vehicle_id,
        location:    report.location,
        user_id:     report.user_id,
        status:      report.status,
      })
      .then(function (id) {
        return report.media.forEach((uri)=>{
          knex('media')
          .insert({
            type: 'image',
            uri: uri,
            user_id: report.user_id,
            report_id: id[0]
          });
        });
      })
      .then((results, err) => {
        console.log(results)
        if(err) {
          res.json(err)
        }else {
        res.json(results)
        }
      })
  });
  return router
}