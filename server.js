require('dotenv').config();
const path = require('path');

const ENV        = process.env.ENV || 'production';
const express    = require('express'    );
const knexConfig = require("./knexfile" );
const bodyParser = require('body-parser');
const knex       = require("knex"       )(knexConfig[ENV]);
const PORT       = process.env.PORT;

const app = express();
app.use(express.static('build/public'));
app.use(express.static('build/js'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const reportsRoutes   = require("./routes/reports"  );
const mediaRoutes     = require("./routes/media"    );
const vehiclesRoutes  = require("./routes/vehicles" );
const witnessesRoutes = require("./routes/witnesses");
const usersRoutes     = require("./routes/users");
const adminsRoutes     = require("./routes/admins");

app.use("/api/reports",   reportsRoutes  (knex));
app.use("/api/media",     mediaRoutes    (knex));
app.use("/api/vehicles",  vehiclesRoutes (knex));
app.use("/api/witnesses", witnessesRoutes(knex));
app.use("/api/users",     usersRoutes(knex));
app.use("/api/admins",     adminsRoutes(knex));
// can be GETted through the webpack-dev-server at localhost:8080/api or whatever host/port makes sense

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});


