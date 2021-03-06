const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

router.route("/getTodoList").get(controllers.getToDoList);
router.route("/createNewTodo").post(controllers.createNewTodo);
router.route("/changeStatus").post(controllers.changeStatus);
router.route("/deleteTodo").post(controllers.deleteTodo);
router.route("/editTodo").post(controllers.editTodo);



module.exports = router;