const { databaseConfig } = require('./.config');

const Pool = require('pg').Pool
const pool = new Pool(databaseConfig)

const getToDoItems_1 = async (req, res) => {
    const client = await pool.connect();
    const result = client.query('SELECT * FROM to_do_items', (error) => {
        if (error) {
            throw error
        }
    })
    client.release(); // Release the client back to the pool

    res.json(result.rows); //
}

const getToDoItems = async () => {
    try {
        const result = await pool.query('SELECT * FROM to_do_items');
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const toggleToDoComplete = async (isCompleted, todoId) => {
    try {
        const result = await pool.query('UPDATE to_do_items set completed = $1 Where id = $2',
            [isCompleted, todoId]);
        return result;
    } catch (err) {
        throw err;
    }
};

const updateToDoText = async (newTitle, todoId) => {
    try {
        const result = await pool.query('UPDATE to_do_items set title = $1 Where id = $2',
            [newTitle, todoId]);
        return result;
    } catch (err) {
        throw err;
    }
};

const delteToDoItem = async (todoId) => {
    try {
        const result = await pool.query('DELETE FROM to_do_items where id = $1',
            [todoId]);
        return result;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    getToDoItems, toggleToDoComplete, updateToDoText, delteToDoItem

} 