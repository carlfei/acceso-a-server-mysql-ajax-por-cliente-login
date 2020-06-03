$(document).ready(function () {

    $("#search-form6").submit(function (event) {

        
        event.preventDefault();

        mi_ajax6();

    });

});

function mi_ajax6() {

    var search6 = {}
 
	search6["numero"] = $("#updatebyid").val();
	search6["calle"] = $("#update_calle").val();
	




    $("#btn-search6").prop("disabled", true);


if(search6["calle"]!=""){
$.ajax({
    
   
 
    
        type: "POST",
        contentType: "application/json",
        url: "/updateCalleById",
        data: JSON.stringify(search6),
        dataType: 'text',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Tabla</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

         
            $("#btn-search6").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax </h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

          
            $("#btn-search6").prop("disabled", false);

        }
    });

}

}
