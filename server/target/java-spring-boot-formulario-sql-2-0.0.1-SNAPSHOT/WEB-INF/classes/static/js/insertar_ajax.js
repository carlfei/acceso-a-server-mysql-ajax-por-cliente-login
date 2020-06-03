$(document).ready(function () {

    $("#search-form2").submit(function (event) {

        
        event.preventDefault();

        mi_ajax2();

    });

});

function mi_ajax2() {

    var search2 = {}
 

	search2["calle"] = $("#insert_calle").val();
	search2["numero"] = $("#insert_numero").val();
	search2["distrito"] = $("#insert_distrito").val();
	search2["cp"] = $("#insert_cp").val();



    $("#btn-search").prop("disabled", true);


if(search2["calle"]!=""){
$.ajax({
    
   
 
    
        type: "POST",
        contentType: "application/json",
        url: "/insertall/insert",
        data: JSON.stringify(search2),
        dataType: 'text',
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

}

}
