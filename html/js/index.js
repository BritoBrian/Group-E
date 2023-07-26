const searchBtn=document.querySelector('.searchBtn');
const searchValue=document.querySelector('.search');


var value=null;
searchValue.addEventListener('input',(data)=>{value=null; value=data.target.value;});


searchBtn.addEventListener('click',()=>{
    window.reload;
    window.location.href=`/api/users/search/${value}`;
});

$('#add_user').submit((e)=>{alert('data submitted');});
$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

   console.log(data);
    var request = {
        "url" : `http://localhost:8000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})
