var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/public/style.css',function(req,res){
    res.sendFile(__dirname+'/public/style.css');
});

app.get('/public/index.js',function(req,res){
    res.sendFile(__dirname+'/public/index.js');
});

io.on('connection',function(socket){

    socket.on('sendMsgJS',function(payload){
        //callback("SUCCESS");
        io.emit('sendMsgApp',payload);
    });

    socket.on('newUserConnected',function(nicknameUserConnected){
        socket.broadcast.emit('newUserConnected',nicknameUserConnected);
    });

    socket.on('someoneTyping',function(nicknameWhoIsTyping){
        socket.broadcast.emit('someoneTyping',nicknameWhoIsTyping);
    });

    socket.on('disconnect', function(){
        
    });
});


http.listen(3000,function(){
    console.log("listen on 3000");
});