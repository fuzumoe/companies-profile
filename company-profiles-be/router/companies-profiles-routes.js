const express = require("express");

const router = express.Router();

const companiesProfiles = require("../data/companies.json");

router.get("/profiles.json", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');

  let resData = companiesProfiles.data;
  let companyName = req.query.name;
  let specialities = req.query.specialities;

  if (companyName) {
    resData = resData.filter((data) => {
      if (data.name.toLowerCase().includes(companyName.toLocaleLowerCase()))
        return data;
    });
  }

  if (specialities) {
    specialities = specialities.split(",");
    resData = resData.filter((data) => {  
      if (specialities.some((sp) => {return data.specialities.includes(sp)  }))
        return data;
 
    });
  }


  res.json(resData);
});

module.exports = router;
