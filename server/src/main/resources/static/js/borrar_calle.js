$(document).ready(function () {

    $("#search-form5").submit(function (event) {

        
        event.preventDefault();

        mi_ajax5();

    });

});

function mi_ajax5() {

    var search5 = {}
    search5["calle"] = $("#borrar_calle").val();
	





    $("#btn-search5").prop("disabled", true);


if(search5["calle"]!=""){
$.ajax({
    
   
 
    
        type: "DELETE",
        contentType: "application/json",
        url: "/deletebycalle/calle",
        data: JSON.stringify(search5),
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Tabla</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

         
            $("#btn-search5").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

          
            $("#btn-search5").prop("disabled", false);

        }
    });

}

}
