
$(function()
{
    //filterUserList();
})

function filterUserList()
{
    // https://www.w3schools.com/howto/howto_js_filter_lists.asp FILTER LIST TUTORIAL

    //wrong code
    var input, filter, ul, li, a, i;
    input = $('#inputSearchUser');
    filter = input.val().toUpperCase();
    ul = $('.pseudoUl');
    li = $('.pseudoLi');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}