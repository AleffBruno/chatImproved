var socket;
var nickname;

$(function()
{
    socket_p();
    listGroup_listenedEvents_p();
    sendMessage_p();

    modalBehaviour_p();
    updateScrollToBottom_a();
})

function socket_p()
{
    socket = io();

    socket.on('connect', function () {
        // do something if necessary
    });

    socket.on('sendMsgApp',function(payload){
        if(payload.to != nickname)
        {
            var content = payload.to+": "+payload.msg;
            appendMsg_a(content);
        }
    })

    socket.on('newUserConnected',function(nicknameUserConnected){
        msg = nicknameUserConnected+" connected!"
        appendMsg_a(msg);
    });
}

function sendMessage_p()
{
    //HINT : https://api.jquery.com/change/ or css scroll aways on final
    //var elmnt = document.getElementById("divMessagesBox").scrollTop = 99999999999999;
    $('.formSendMsg').submit(function(){
        var msg = $('#inputWriteMessage').val();
        //appendMsg_a(msg);
        var payload = {"to":nickname,"from":"global","msg":msg};
        content = payload.to+": "+payload.msg;
        appendMsg_a(content);
        socket.emit('sendMsgJS',payload);
        $('#inputWriteMessage').val('');
        return false;
    });
}

function listGroup_listenedEvents_p()
{
    //hint : https://getbootstrap.com/docs/4.0/components/list-group/

    //$('a[data-name="home"]').on('shown.bs.tab', function (e) {
    $('div.list-group > a[role="tab"]').on('shown.bs.tab', function (e) {
        updateScrollToBottom_a();
    });
}

function appendMsg_a(msg)
{
    $('#divMessagesBox > div.tab-content > div.active').append("<p>"+ msg +"</p>");
    updateScrollToBottom_a();
}

function updateScrollToBottom_a()
{
    $('#divMessagesBox').scrollTop(99999999999);
    // hint : scroll start from bottom
}

function linksAsJson() //pending improvement
{
    var object = '{"indexes":["home","profile"]}';
    var objectAsArray = JSON.parse(object);
    var arrayElements = [];
    for(var i = 0;i<objectAsArray.indexes.length;i++)
    {
        var currentIndex = objectAsArray.indexes[i].toLowerCase();
        arrayElements.push( '<a class="pseudoLi list-group-item list-group-item-action" id="list-'+currentIndex+'-list" data-toggle="list" href="#list-'+currentIndex+'" role="tab" aria-controls="'+currentIndex+'" data-name="'+currentIndex+'">'+currentIndex+'</a>');
    }

    $('#userList').html(
        arrayElements.join("")
    );
}

function filterUserList_html()
{
    var input, filter,ul,li,userLink,i;
    input = $('#inputSearchUser');
    fitler = input.val().toUpperCase();
    ul = $('#userList');
    li = $('#userList > a');

    // $(".list-group .list-group-item[data-name='profile']") << improvement

    // VARS UL AND LI AREN'T REAL "UL" and "LI", they are "DIV";
    /* var input, filter, ul, li, userLink, i;
    input = document.getElementById('inputSearchUser');
    filter = input.value.toUpperCase();
    ul = document.getElementById("userList");
    li = ul.getElementsByTagName('a');

    for (i = 0; i < li.length; i++) {
        userLink = li[i].innerHTML;
        if(userLink.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    } */
}

function modalBehaviour_p()
{
    $('#myModal').modal();

    $('#btnModalNickname').click(function(){
        nickname = $('#nickname').val();
        socket.emit('newUserConnected',nickname);
    })
}
