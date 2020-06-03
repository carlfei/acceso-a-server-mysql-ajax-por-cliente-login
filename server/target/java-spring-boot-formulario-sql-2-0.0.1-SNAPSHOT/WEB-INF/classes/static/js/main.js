$(document).ready(function () {

    $("#search-form").submit(function (event) {

        
        event.preventDefault();

        mi_ajax();

    });

});

function mi_ajax() {

    var search = {}
    search["numero"] = $("#username").val();

 

    $("#btn-search").prop("disabled", true);


if(search["numero"]==""){
    $.ajax({
    
 
    
    
        type: "POST",
        contentType: "application/json",
        url: "/show",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Tabla</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

         
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

          
            $("#btn-search").prop("disabled", false);

        }
    });
}else{


$.ajax({
    
   
 
    
        type: "POST",
        contentType: "application/json",
        url: "/findbyid/search",
        data: JSON.stringify(search),
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Tabla</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

         
            $("#btn-search").prop("disabled", false);
            $("#username").val('');

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

          
            $("#btn-search").prop("disabled", false);

        }
    });



}
}