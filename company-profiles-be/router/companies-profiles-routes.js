const express = require("express");

const router = express.Router();
var _ = require("lodash");
const companiesProfiles = require("../data/companies.json");

router.get("/", (req, res, next) => {
  let resData = companiesProfiles.data;
  let companyName = req.query.name;
  let specialities = req.query.specialities;

  if (companyName && companyName != "") {
    resData = resData.filter((data) => {
      if (data.name.toLowerCase().includes(companyName.toLocaleLowerCase()))
        return data;
    });
  }

  if (specialities && specialities != "") {
    specialities = specialities.split(",");
    resData = resData.filter((data) => { 
      console.log(_.some(data.specialities, specialities));
      if (specialities.some((sp) => {return data.specialities.includes(sp)  }))
        return data;
 
    });
  }

  res.json(resData);
});

module.exports = router;
