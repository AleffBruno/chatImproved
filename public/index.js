
$(function()
{

})

function filterUserList()
{
    var input, filter, ul, li, a, i;
    input = document.getElementById('inputSearchUser');
    filter = input.value.toUpperCase();
    ul = document.getElementById("userList");
    li = ul.getElementsByTagName('a');
    
    for (i = 0; i < li.length; i++) {
        a = li[i].innerHTML;
        if(a.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}