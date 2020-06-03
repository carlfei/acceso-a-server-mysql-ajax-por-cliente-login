$(document).ready(function () {

    $("#search-form3").submit(function (event) {

        
        event.preventDefault();

        mi_ajax3();

    });

});

function mi_ajax3() {

    var search3 = {}
    search3["calle"] = $("#findcalle").val();
	





    $("#btn-search3").prop("disabled", true);


if(search3["calle"]!=""){
$.ajax({
    
   
 
    
        type: "POST",
        contentType: "application/json",
        url: "/findbycalle/calle",
        data: JSON.stringify(search3),
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Tabla</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

         
            $("#btn-search3").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

          
            $("#btn-search3").prop("disabled", false);

        }
    });

}

}
