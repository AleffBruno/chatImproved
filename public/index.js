
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
    //HINT : https://api.jquery.com/change/ or css scroll aways on final
    //var elmnt = document.getElementById("divMessagesBox").scrollTop = 99999999999999;
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