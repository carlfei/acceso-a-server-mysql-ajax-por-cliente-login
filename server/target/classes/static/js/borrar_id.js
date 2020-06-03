$(document).ready(function () {

    $("#search-form4").submit(function (event) {

        
        event.preventDefault();

        mi_ajax4();

    });

});

function mi_ajax4() {

    var search4 = {}
    search4["numero"] = $("#borrar_id").val();
	





    $("#btn-search4").prop("disabled", true);


if(search4["numero"]!=""){
$.ajax({
    
   
 
    
        type: "POST",
        contentType: "application/json",
        url: "/deletebyid/id",
        data: JSON.stringify(search4),
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Tabla</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

         
            $("#btn-search4").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

          
            $("#btn-search4").prop("disabled", false);

        }
    });

}

}
