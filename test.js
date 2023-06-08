const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// -------------------------------------------------------------------
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// ----------------------------------------------------------------------
app.get('/', (req, res) => {
    res.render('landing'); 
});
app.get('/login', (req, res) => {
    res.render('login'); 
});
app.get('/register', (req, res) => {
    res.render('register'); 
});
app.get('/postLogin', (req, res) => {
    res.render('postLogin'); 
});
app.get('/postRegister', (req, res) => {
    res.render('postRegister'); 
});
app.get('/profile', (req, res) => {
    res.render('profile');
});
app.get('*', (req, res) => {
    return res.render('404');
});
// --------------------------------------------------------------------
app.post('/login', (req, res) => {
    const User = req.body.username;
    res.render('postLogin', { User });
    return res.redirect('/postLogin');
});
app.post('/register', (req, res) => {
    // const { email, password, dateOfBirth, name } = req.body;
    const User = req.body.name;
    res.render('postRegister', { User });
    return res.redirect('/postRegister'); 
});
// ------------------------------------------------------------------
app.listen(3000, () => {
    console.log("server start");
});