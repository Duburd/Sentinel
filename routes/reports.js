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
        'reports.date',
        'reports.location',
        'reports.description',
        'reports.id',
        'reports.created_at',
        'reports.status',
      )
      .from('reports')
      .leftJoin('vehicles', 'reports.vehicle_id', '=', 'vehicles.id')
      .leftJoin('users', 'reports.user_id', '=', 'users.id')
      .then((results) => {
        res.json(results)
      }).catch((err) => {
        res.json(err)
      })
  });

  router.post("/:id/witness", (req, res, next) => {
    console.log('req body', req.body)
    knex('witnesses')
      .insert({
        report_id: req.params.id,
        first_name: req.body.data.firstName,
        last_name: req.body.data.lastName,
        email: req.body.data.email,
        phone_number: req.body.data.phone,
        testimony: req.body.data.testimony,
        status: 'Unread',
      })
      .then(()=> {
        res.json({
          message: 'witness testimony submitted'
        })
      })
      .catch((err) => {
        res.json(err)
      })
  });

  router.post("/new", (req, res, next) => {
    console.log(req.body)
    knex('reports')
      .insert({
        description: req.body.data.description,
        user_id: req.body.data.userId,
        vehicle_id: req.body.data.vehicleId,
        status: 'Pending',
        date: req.body.data.incidentTime,
        location: req.body.data.location,
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
          .where('id', '=', req.body.data.userid)
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

  router.put("/:id/witnessstatus", (req, res, next) => {
    knex('witnesses')
      .where('id', '=', req.params.id)
      .update({
        status: 'Read',
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
    let report_id = null;
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
        date:              Date.now(),
      })
      
      .then((id) => {
        report_id = id
        if (media) {
          media.forEach((uri)=>{
            knex('media')
            .insert({
              type: 'image',
              uri: uri,
              user_id: user_id,
              report_id: id[0]
            }).catch((e) => {
              res.json('error inserting image to db', e)
            })
          })
        }
      })
      .then(() => {
        if(damage){
          return knex('vehicles')
          .where('id', '=', vehicle_id)
          .update({ damage: damage, })
        }
      })
      .then((results, err) => {
        if(err) {
          res.json(err)
        }
        res.json([{results: results, report_id: report_id[0]}])
      })
  });
  return router
}