/**
 Name: Vaishakhi Patel, vpatel@cs.uml.edu
 Computer Science Department, UMass Lowell
 Comp.4610, GUI Programming I
 File:
 Created: 21-Nov-2017
 Last updated by VP: 02-Dec-2017 20:00
**/

$(function () {
    $("#gallon_price_slider").slider({
            min: 0.5, max: 5, step: 0.2, value: 1,
            slide: function( event, ui ) {
                $("#gallon_price").val(ui.value);
            }
    });
    var initialValue = $("#gallon_price_slider").slider("option", "value");
    $("#gallon_price").val(initialValue);


    $('#gallon_price').on('keyup', function() {
            var newVal = $(this).val();
            $("#gallon_price_slider").slider("option", "value", newVal);
    });



    $("#incentives_slider").slider({
            min: 100, max: 10000, step: 100, value: 500,
            slide: function( event, ui ) {
                $("#incentives").val(ui.value);
            }
    });
    var initialValue = $("#incentives_slider").slider("option", "value");
    $("#incentives").val(initialValue);
    $('#incentives').on('keyup', function() {
            var newVal = $(this).val();
            $("#incentives_slider").slider("option", "value", newVal);
    });



    $("#interest_slider").slider({
            min: 0.5, max: 20, step: 2, value: 5,
            slide: function( event, ui ) {
                $("#interest").val(ui.value);
            }
    });
    var initialValue = $("#interest_slider").slider("option", "value");
    $("#interest").val(initialValue);
    $('#interest').on('keyup', function() {
            var newVal = $(this).val();
            $("#interest_slider").slider("option", "value", newVal);
    });



    $("#down_payment_slider").slider({
            min: 0, max: 100, step: 10, value: 50,
            slide: function( event, ui ) {
                $("#down_payment").val(ui.value);
            }
    });
    var initialValue = $("#down_payment_slider").slider("option", "value");
    $("#down_payment").val(initialValue);
    $('#down_payment').on('keyup', function() {
            var newVal = $(this).val();
            $("#down_payment_slider").slider("option", "value", newVal);
    });



    $("#miles_driven_slider").slider({
            min: 100, max: 50000, step: 100, value: 5000,
            slide: function( event, ui ) {
                $("#miles_driven").val(ui.value);
            }
    });
    var initialValue = $("#miles_driven_slider").slider("option", "value");
    $("#miles_driven").val(initialValue);
    $('#miles_driven').on('keyup', function() {
            var newVal = $(this).val();
            $("#miles_driven_slider").slider("option", "value", newVal);
    });



    $("#months_slider").slider({
            min: 1, max: 50, step: 1, value: 5,
            slide: function( event, ui ) {
                $("#months").val(ui.value);
            }
    });
    var initialValue = $("#months_slider").slider("option", "value");
    $("#months").val(initialValue);
    $('#months').on('keyup', function() {
            var newVal = $(this).val();
            $("#months_slider").slider("option", "value", newVal);
    });




    $("#mpg_count_slider").slider({
            min: 1, max: 10, step: 1, value: 5,
            slide: function( event, ui ) {
                $("#mpg_count").val(ui.value);
            }
    });
    var initialValue = $("#mpg_count_slider").slider("option", "value");
    $("#mpg_count").val(initialValue);
    $('#mpg_count').on('keyup', function() {
            var newVal = $(this).val();
            $("#mpg_count").slider("option", "value", newVal);
    });



    $("#price_count_slider").slider({
            min: 1, max: 10, step: 1, value: 5,
            slide: function( event, ui ) {
                $("#price_count").val(ui.value);
            }
    });
    var initialValue = $("#price_count_slider").slider("option", "value");
    $("#price_count").val(initialValue);
    $('#price_count').on('keyup', function() {
            var newVal = $(this).val();
            $("#price_count_slider").slider("option", "value", newVal);
    });


});


function create_slider_for_price_val () {

       $('div#price-value-each div').each(function() {
           var temp_input_id = $(this).attr('id');
           var input_id = temp_input_id.replace("_slider","");
           input_id = "#" + input_id;

           $(this).slider({
               min: 1000, max: 100000, step: 100, value: 20000,
               slide: function( event, ui ) {
                  $(input_id).val(ui.value);
               }
           });
       });


       $('div#price-value-each input').each(function() {

           var temp_input_id = $(this).attr('id');
           var slider_id = temp_input_id.concat("_slider");
           input_id = "#" + temp_input_id;
           slider_id = "#" + slider_id;

           var initialValue = $(slider_id).slider("option", "value");
           $(this).val(initialValue);
           $(this).on('keyup', function() {
               var newVal = $(this).val();
               $(slider_id).slider("option", "value", newVal);
           });


       });

}


function create_slider_for_mpg_val () {

       $('div#mpg-value-each div').each(function() {
           var temp_input_id = $(this).attr('id');
           var input_id = temp_input_id.replace("_slider","");
           input_id = "#" + input_id;

           $(this).slider({
               min: 1, max: 50, step: 5, value: 20,
               slide: function( event, ui ) {
                  $(input_id).val(ui.value);
               }
           });
       });


       $('div#mpg-value-each input').each(function() {

           var temp_input_id = $(this).attr('id');
           var slider_id = temp_input_id.concat("_slider");
           input_id = "#" + temp_input_id;
           slider_id = "#" + slider_id;

           var initialValue = $(slider_id).slider("option", "value");
           $(this).val(initialValue);
           $(this).on('keyup', function() {
               var newVal = $(this).val();
               $(slider_id).slider("option", "value", newVal);
           });


       });

}


