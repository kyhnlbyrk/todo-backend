const DBOp = require('../models/DBOp')

exports.getToDoList = async (req, res, next) => {
    try {
        const search = req.query.search;
        const orderType = req.query.orderType;
        console.log(orderType);
        console.log(search);
        const [todoList, _, query] = await DBOp.getToDoList(orderType, search);
        console.log('todoList sql = ', query);
        res.status(200).json(todoList);
    } catch (error) {
        next(error);
    }   
}

exports.createNewTodo = async (req, res, next) => {
    try {
        const { name } = req.body;
        if(!name) throw { code: 400, message: 'Name can not be empty!'};
        todo = await DBOp.createNewTodo(name);
        console.log("id = " + todo.insertId + " inserted with name = " + name);
        res.status(201).json();
    } catch (error) {
        console.log(error);
        next(error);
    }
    
}

exports.changeStatus = async (req, res, next) => {
    try {
        const { id } = req.body;
        const { status } = req.body;
        if(!status)  throw { code: 400, message: 'Status can not be empty!'};
        if(!id) throw { code: 400, message: 'Id can not be empty!'};
        todo = await DBOp.changeStatus(id, status);
        console.log("id = " + id + " status changed to = " + status);
        res.status(201).json();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.body;
        if(!id) throw { code: 400, message: 'Id can not be empty!'};
        todo = await DBOp.deleteTodo(id);
        console.log("id = " + id + " is deleted ");
        res.status(201).json();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.editTodo = async (req, res, next) => {
    try {
        const { id } = req.body;
        const { name } = req.body;
        if(!id) throw { code: 400, message: 'Id can not be empty!'};
        if(!name) throw { code: 400, message: 'Name can not be empty!'};
        todo = await DBOp.editTodo(id, name);
        console.log("id = " + id + " is editted name = " + name);
        res.status(201).json();
    } catch (error) {
        console.log(error);
        next(error);
    }
}