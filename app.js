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

    socket.on('newUserConnected',function(nicknameUserConnected){

        socket.broadcast.emit('newUserConnected',nicknameUserConnected);


        if(connectedUsers.indexOf(nicknameUserConnected) == -1)
        {
            connectedUsers.push(nicknameUserConnected);
        }

        socket.emit('connedtedUsers',connectedUsers);
        
    });

    socket_v.on('anUserDisconnect',function(userWhoDisconnect){
        for (var i=usersOnline.length-1; i>=0; i--) 
        {
            if (usersOnline[i] === userWhoDisconnect) {
                usersOnline.splice(i, 1);
            }
        }

        socket_v.broadcast.emit('notifierUsersWhoOnline',usersOnline);
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

