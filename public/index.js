
$(function()
{
    
})

function appendMsg()
{
    $('#divMessagesBox > div.tab-content > div.active').append("<p> newMsg </p>");
    updateScrollToBottom();
}

function updateScrollToBottom()
{
    $( document ).ready(function() {
        console.log( "ready!" );
    });
    //console.log("a");
    $('#divMessagesBox').scrollTop(99999999999);
}

function filterUserList()
{
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