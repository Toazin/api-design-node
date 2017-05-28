var express = require('express');
var app = express();

var todos = [];

app.get('/todos', function (req, res) {
    // console.log("Req: ", req);
    // console.log("Res: ", res);
    res.json(todos)
});

app.post('/todos', function (req, res) {
    // console.log("Req: ", req);
    // console.log("Res: ", res);
    console.log(req.body);
    var todo = req.body.todo;
    todos.push(todo);
});

app.get('/todos/:id', function (req, res) {
    var todo = _.find(todos,{id:req.params.id});
    res.json(todo);
})

app.listen(3000);
console.log("Listening - Port 3000");
