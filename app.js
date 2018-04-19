var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connectedUsers = [];

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

    socket.on('showMeWhoAreOnline',function(callback){
        callback(connectedUsers);
    });

    socket.on('newUserConnected',function(nicknameUserConnected){

        socket.broadcast.emit('newUserConnected',nicknameUserConnected);

        if(connectedUsers.indexOf(nicknameUserConnected) == -1)
        {
            connectedUsers.push(nicknameUserConnected);
        }

        //socket.emit('connedtedUsers',connectedUsers);
        
    });

    socket.on('anUserDisconnect',function(userWhoDisconnect){
        for (var i=connectedUsers.length-1; i>=0; i--) 
        {
            if (connectedUsers[i] === userWhoDisconnect) {
                connectedUsers.splice(i, 1);
            }
        }

        socket.broadcast.emit('notifierUsersWhoOnline',connectedUsers);
    });


    socket.on('someoneTyping',function(nicknameWhoIsTyping){
        socket.broadcast.emit('someoneTyping',nicknameWhoIsTyping);
    });

    socket.on('someoneStopTyping',function(nicknameWhoStopTyping){
        socket.broadcast.emit('someoneStopTyping',nicknameWhoStopTyping);
    });

    socket.on('disconnect', function(){
        
    });
});


http.listen(3000,function(){
    console.log("listen on 3000");
});

