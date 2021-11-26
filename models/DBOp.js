const db = require('../config/db');

class DBOp {
    static createNewTodo(name) {
        let sql = "INSERT INTO todo_list (name, status, modified_time, created_time) VALUES (?, 0, NOW(), NOW())";
        return db.execute(sql, [name]);
    }

    static getToDoList(orderType, searchParam) {
        const search = ('%' + searchParam + '%');
        const sql = db.format("SELECT * FROM todo_list WHERE name LIKE ? ORDER BY status ASC, modified_time " + (orderType === 'asc' ? 'ASC;' : 'DESC;'), [search]);
        console.log('getToDoList sql = ', sql);
        return db.execute(sql);
    }

    static changeStatus(id, status) {
        let sql = "UPDATE todo_list SET status = ?, modified_time = NOW() WHERE id = ?";
        return db.execute(sql, [status, id]);
    }

    static deleteTodo(id) {
        let sql = "DELETE FROM todo_list WHERE id = ?";
        return db.execute(sql, [id]);
    }
}

module.exports = DBOp;