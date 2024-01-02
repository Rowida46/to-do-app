const { getToDoItems, toggleToDoComplete, updateToDoText, delteToDoItem } = require('./queries');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/todos', async (req, res) => {
    try {
        const data = await getToDoItems();
        console.log(data)
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching data', error);
        res.status(500).json({ error: error });

    }
});


app.patch('/todos/toggle/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the URL
    const { isCompleted } = req.body;

    try {
        const data = await toggleToDoComplete(isCompleted, id);
        console.log(data)
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching data', error);
        res.status(500).json({ error: error });

    }
});

app.patch('/todos/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the URL
    const { newTitle } = req.body;
    try {
        const data = await updateToDoText(newTitle, id);
        console.log(data, 'updateToDoText')
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching data', error);
        res.status(500).json({ error: error });

    }
});


app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the URL

    try {
        const data = await delteToDoItem(id);
        console.log(data)
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching data', error);
        res.status(500).json({ error: error });

    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});