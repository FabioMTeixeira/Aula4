const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const PORT = 3000;

const model = require('./models/user');

app.get('/', (req, res) => {
    res.render('index', { title: 'Index' });
});

app.get('/test', (req, res) => {
    res.render('test', { title: 'Test' });
});

app.get('/users', (req, res) => {
    const users = model.enabled();

    res.render('users', { title: 'Users', users: users});
});

app.get('/api/users', (req, res) => {
    const users = model.enabled();

    res.send(users);
});

app.listen(PORT, () => {
    console.log('API up and running');
});