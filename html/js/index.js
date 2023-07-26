const searchBtn=document.querySelector('.searchBtn');
const searchValue=document.querySelector('.search');


var value=null;
searchValue.addEventListener('input',(data)=>{value=null; value=data.target.value;});


searchBtn.addEventListener('click',()=>{
    window.reload;
    window.location.href=`/api/users/search/${value}`;
});

$('#add_user').submit((e)=>{alert('data submitted');});