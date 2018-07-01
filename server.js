const express    = require('express');
const knexConfig = require("./knexfile");
const knex       = require("knex")(knexConfig[ENV]);

const PORT = process.env.API_PORT | 8081;       // this port needs to match the port in the webapack.config.js -> devServer -> proxy


const app = express();

const reportsRoutes   = require("./routes/reports"  );
const audioRoutes     = require("./routes/audio"    );
const videosRoutes    = require("./routes/videos"   );
const photosRoutes    = require("./routes/photos"   );
const vehiclesRoutes  = require("./routes/vehicles" );
const witnessesRoutes = require("./routes/witnesses");

app.use("/api/reports",   reportsRoutes  (knex));
app.use("/api/audio",     audioRoutes    (knex));
app.use("/api/videos",    videosRoutes   (knex));
app.use("/api/photos",    photosRoutes   (knex));
app.use("/api/vehicles",  vehiclesRoutes (knex));
app.use("/api/witnesses", witnessesRoutes(knex));

// can be GETted through the webpack-dev-server at localhost:8080/api or whatever host/port makes sense
app.get('/api', (req, res) => {
  res.json({pretty: 'much', amazing: 'eh'});
});

app.listen(PORT, () => {console.log("API server is up");});


