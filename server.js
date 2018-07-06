require('dotenv').config();
const path = require('path');

const ENV        = process.env.ENV || 'production';
const express    = require('express'   );
const knexConfig = require("./knexfile");
const bodyParser = require('body-parser');
const knex       = require("knex"      )(knexConfig[ENV]);
const PORT       = process.env.PORT;       // this port needs to match the port in the webapack.config.js -> devServer -> proxy
// const webpack = require('webpack');
// const config = require('./webpack.config.dev.js');
// var compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }));

// app.use(require('webpack-hot-middleware')(compiler));

const app = express();
app.use(express.static('build/public'));
app.use(express.static('build/js'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

// app.get('*', function(req, res) {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
//   });

const reportsRoutes   = require("./routes/reports");
const mediaRoutes     = require("./routes/media");
const vehiclesRoutes  = require("./routes/vehicles");
const witnessesRoutes = require("./routes/witnesses");
const usersRoutes     = require("./routes/users");
// const updateReport      = require("./routes/update_report" );

app.use("/api/reports",   reportsRoutes(knex));
app.use("/api/media",     mediaRoutes(knex));
app.use("/api/vehicles",  vehiclesRoutes(knex));
app.use("/api/witnesses", witnessesRoutes(knex));
app.use("/api/users",     usersRoutes(knex));
// app.use("/api/reports/:id",         updateReport     (knex));


// can be GETted through the webpack-dev-server at localhost:8080/api or whatever host/port makes sense

app.listen(PORT, (e) => {
  console.log(`listening on ${PORT},\n err?:\na:\n`, e);
  // console.log("API server is up, on port " + PORT);
});


