// URL: https://dev.to/alexmercedcoder/basics-of-expressjs-todo-list-tutorial-1a4d

const express = require('express');

const app = express();

const todos = [];

//middlewares
app.use("/static", express.static("static"));
app.use(express.urlencoded({extended: true}));

app.get('/test', (req, res) => {
    res.send('<h1>hello, world!</h1>');
})

app.get('/', (req, res) => {
    res.render('index.ejs', {name:'john doe', todos: todos});
})

app.post('/', (req, res) => {
    //console.log(req.body);
    todos.push(req.body);
    //redirect
    res.redirect('/');

})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});