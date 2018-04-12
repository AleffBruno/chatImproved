
$(function()
{
    listGroup_listenedEvents();
})


function listGroup_listenedEvents()
{
    //hint : https://getbootstrap.com/docs/4.0/components/list-group/

    
    //$('a[data-name="home"]').on('shown.bs.tab', function (e) {
    $('div.list-group > a[role="tab"]').on('shown.bs.tab', function (e) {
        updateScrollToBottom();
    });
}

function appendMsg()
{
    $('#divMessagesBox > div.tab-content > div.active').append("<p> newMsg </p>");
    updateScrollToBottom();
}

function updateScrollToBottom()
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

function filterUserList()
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