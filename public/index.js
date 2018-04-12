
$(function()
{
    updateScrollToBottom_a();
    
    listGroup_listenedEvents_p();
    sendMessage_p();
})

function sendMessage_p()
{
    $('.formSendMsg').submit(function(){
        var msg = $('#inputWriteMessage').val();
        appendMsg_a(msg);
        //do something with the message
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

    //console.log("a");
    // setTimeout(function(){
    //     $("#divMessagesBox").animate({ scrollTop: $(".tab-pane.active")[0].scrollHeight}, 1000);
    // }, 1000)

    /* setTimeout(function(){
        $('#divMessagesBox').scrollTop(99999999999);
    }, 1000) */
}

function filterUserList_html()
{
    // $(".list-group .list-group-item[data-name='profile']") << improvement

    // VARS UL AND LI AREN'T REAL "UL" and "LI", they are "DIV";
    var input, filter, ul, li, userLink, i;
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
    }
}