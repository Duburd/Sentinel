"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')



module.exports = (knex) => {

    //get all media for modal tab
    router.get("/:id/media", (req, res, next) => {
      knex.select('*').from('media')
      .where('report_id', '=', req.params.id)
        .then((results) => {
          res.json(results)
        }).catch((err) => {
          res.json(err)    });

        })
  

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
        'vehicles.plate',
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
      )
      .from('reports')
      .leftJoin('vehicles', 'reports.vehicle_id', '=', 'vehicles.id')
      .leftJoin('users', 'reports.user_id', '=', 'users.id')
      .leftJoin('witnesses', 'witnesses.report_id', 'reports.id')
      .then((results) => {
        res.json(results)
      }).catch((err) => {
        res.json(err)
      })
  });

  router.post("/new", (req, res, next) => {
    console.log(req.body)
    knex('reports')
      .insert({
        description: req.body.data.description,
        user_id: req.body.data.policyNum,
        vehicle_id: req.body.data.vehicleId,
        status: 'pending'
      })
      .then(function () {
        return knex('vehicles')
          .where('id', '=', req.body.data.vehicleId)
          .update({
            damage: req.body.data.damage,
          })
          .then(function () {
            res.json({
              message: 'report submitted'
            })
          }).catch((err) => {
            res.json(err)
          })
      });
  });

  router.put("/:id/update", (req, res, next) => {
    knex('reports')
      .where('id', '=', req.params.id)
      .update({
        description: req.body.data.description,
      })
      .then(()=> {
        return knex('users')
          .where('policy_number', '=', req.body.data.policy_number)
          .update({
            first_name: req.body.data.first_name,
            last_name: req.body.data.last_name,
            phone_number: req.body.data.phone_number,
            license_number: req.body.data.licenseNum,
          })
          .then(()=> {
            return knex('vehicles')
              .where('vehicles.id', '=', req.body.data.modalObj.vehicleid)
              .update({
                make: req.body.data.make,
                model: req.body.data.model,
                year: req.body.data.year,
                damage: req.body.data.damage,
                plate: req.body.data.plate,
              })
              .then(()=> {
                res.json({
                  message: 'report updated'
                })
              })
              .catch((err) => {
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
      .then(()=> {
        res.json({
          message: 'status updated'
        })
      })
      .catch((err) => {
        res.json(err)
      })
  });

  router.post("/", (req, res, next) => {
    const {damage, description, vehicle_id, location, user_id, status, media, additionalDrivers} = req.body;
    knex('reports')
      .returning('id')
      .insert({
        additionalDrivers: additionalDrivers,
        description:       description,
        vehicle_id:        vehicle_id,
        location:          location,
        user_id:           user_id,
        status:            status,
      })
      .then((id) => {
        console.log(media)
        if (media) {
          media.forEach((uri)=>{
            console.log(uri)
            knex('media')
            .insert({
              type: 'image',
              uri: uri,
              user_id: user_id,
              report_id: id[0]
            }).catch((e) => {
              res.json('flooooooop!!!!', e)
            })
          })
        }
      })
      .then((results, err) => {
        if(err) {
          res.json('err')
        }
        res.json(results)
      })
  });
  return router
}