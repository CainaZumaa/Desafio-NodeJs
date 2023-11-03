const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getALL);

module.exports = routes;
