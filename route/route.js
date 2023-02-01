const route = require("express").Router();

const CURDRouter = require("../controller/controller");

route.get("/Read", CURDRouter.read);

module.exports = route;