$(document).ready(function() {
    $.ajax({
        url: "http://api.makadu.net/events/34/talks",
        type:'GET',
        dataType: 'json',
        success: processData,
    		error: function(){ alert("failed"); }
    });
    function(data) {
       $('.question').append(data.title);
       $('.user').append(data.room);
       $('.email').append(data.description);
    };
});