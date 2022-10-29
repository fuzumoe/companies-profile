const express = require('express');


const companiesProfilesRoutes = require('./router/companies-profiles-routes')

const app = express();

app.use(companiesProfilesRoutes )

app.listen(5000);
