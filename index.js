var express = require('express');
var app = express();
var http = require('http').Server(app);


//query to display using '?msg=xxx'
app.get('/tys', function(req, res){
    var message = req.query.msg;
    res.send(message);
});


// calc

app.get('/c', function(req, res){
    
    var num1 = parseInt(req.query.num1, 10);
    var num2 = parseInt(req.query.num2, 10);
    var signs = req.query.signs;
    var result = 'If you see this you probably have not activated the switches :(';

    switch(signs){

        case 'plus':
        result = num1 + num2;
        break;

        case 'minus':
        result = num1 - num2;
        break;

        case 'multiply':
        result = num1 * num2;
        break;

        case 'divide':
        result = num1 / num2;
        break;
    }
    
    

    res.send(`${result}`);
})


app.listen(3000);