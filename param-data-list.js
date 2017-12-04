/**
 Name: Vaishakhi Patel, vpatel@cs.uml.edu
 Computer Science Department, UMass Lowell
 Comp.4610, GUI Programming I
 File:
 Created: 21-Nov-2017
 Last updated by VP: 02-Dec-2017 20:00
 **/

  // ************* CREATING PRICE INPUTS **************
  $("button#price_count_btn").click(function() {


       $('div#price-value-each label').each(function() {
           $d(this).remove();
       });

       $('div#price-value-each input').each(function() {
           $d(this).remove();
       });

       $('div#price-value-each br').each(function() {
           $d(this).remove();
       });

       $('div#price-value-each div').each(function() {
           $d(this).remove();
       });


       num_inputs = ($("input#price_count").val());
   
       for(num_in=1;num_in<=num_inputs;num_in++) {
         $("div#price-value-each").append(
            "<label for='price_value_" + num_in + "' class='price_value'> Price -" +
            num_in + ": </label>" +
            "<input id='price_value_" + num_in + "' class='price_value'" +
              " name='price_value_" + num_in + "' type='number'>" +
            " <div id='price_value_" + num_in + "_slider' class='slidecontainer'></div>" +
            "<br><br>"

         );
       }

       create_slider_for_price_val();

    });


  // ************* CREATING MPG INPUTS **************
  $("button#mpg_count_btn").click(function() {


       $('div#mpg-value-each label').each(function() {
           $d(this).remove();
       });

       $('div#mpg-value-each input').each(function() {
           $d(this).remove();
       });

       $('div#mpg-value-each br').each(function() {
           $d(this).remove();
       });

       $('div#mpg-value-each div').each(function() {
           $d(this).remove();
       });


       num_inputs = ($("input#mpg_count").val());
   
       for(num_in=1;num_in<=num_inputs;num_in++) {
         $("div#mpg-value-each").append(
            "<label for='mpg_value_" + num_in + "' class='price_value'> MPG -" +
            num_in + ": </label>" +
            "<input id='mpg_value_" + num_in + "' class='mpg_value'" +
              " name='mpg_value_" + num_in + "' type='number'>" +
            " <div id='mpg_value_" + num_in + "_slider' class='slidecontainer'></div>" +
            "<br><br>"

         );
       }

       create_slider_for_mpg_val();

    });


    // ***************** VALIDATION WORK ***************
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $v( "#paramform" ).validate({
    rules: {
    price_count: {required: true, min: 1},
    mpg_count: {required: true, min: 1},
    miles_driven: {required: true, min: 1},
    months: {required: true, min: 1},
    down_payment: "required",
    interest: "required",
    incentives: "required",
    gallon_price: {required: true, min: 0.5},

        },
    messages: {
       price_count: {required: " Price count value is required!!", min: "price should be at least 1"},
       mpg_count: {required: " MPG count Price is required!!", min: "price should be at least 1"},
       miles_driven: {required: " Miles driven is required!!", min: " Miles driven should at least be 1"},
       months: {required: " Months is required!!", min: " Months should at least be 1"},
       down_payment: "down payment is required!!",
       interest: "interest is required!!",
       incentives:"incentives is required!!",
       gallon_price: {required: " Gallon price is required!!", min: " Gallon price should at least be 0.5"},

    }
    });

    // ***** form submition  ********
    // ******************READING PRICE VALUE***********
    var CAR_PRICE_LIST = []
    var MPG_PRICE_LIST = []
    $("button#param-sub").click(function(e) { 

       e.preventDefault();

       // Comparison Title Name
       var Comp_Title_Name = ($("#comparison_name").val()).trim();
       var Car_Price_Count = ($("input#price_count").val()).trim();
       var MPG_Price_Count = ($("input#mpg_count").val()).trim();

       // READING CAR PRICE
       $('div#price-value-each input').each(function() {
           price_val = ($(this).val()).trim();
           if(price_val != ""){
              CAR_PRICE_LIST.push(price_val);
           }
       });

       // READING MPG PRICE
       $('div#mpg-value-each input').each(function() {
           price_val = ($(this).val());
           if(price_val != ""){
              MPG_PRICE_LIST.push(price_val);
           }
       });
       
       console.log(CAR_PRICE_LIST);
       console.log(MPG_PRICE_LIST);

       document.getElementById("price-error").style.display ="none";
       document.getElementById("comp-name-error").style.display ="none";
       if(($v('#paramform').valid()) &&
          (Comp_Title_Name.length > 0) && 
          (CAR_PRICE_LIST.length == Car_Price_Count) &&
          (MPG_PRICE_LIST.length == MPG_Price_Count)) {
             show_table();
       }else if((CAR_PRICE_LIST.length != Car_Price_Count) ||
                (MPG_PRICE_LIST.length != MPG_Price_Count)) {
            CAR_PRICE_LIST = []
            MPG_PRICE_LIST = []
            document.getElementById("price-error").style.display ="block";
       } else {
            CAR_PRICE_LIST = []
            MPG_PRICE_LIST = []
       }

       if (Comp_Title_Name.length == 0){
            CAR_PRICE_LIST = []
            MPG_PRICE_LIST = []
            document.getElementById("comp-name-error").style.display ="block";
       }

    });



    // *********** New Tag Creation Function *************
    function Creating_New_Tag(){


            // hide checkbox for deleting process
            $('#tabs ul li input').css("display","none");
            $('#all-delete-confirm-tab').css("display","none");
            deleting_all_tab_active = false;


        //var num_tabs = $("div#tabs ul li").length;
        var num_tabs = 0;
        $('div#tabs ul li').each(function() {
           num_tabs = ($(this).attr('id'));
        });

        if (num_tabs != undefined){
          num_tabs = num_tabs.replace("tab-","");
          num_tabs = num_tabs.replace("-li","");
        } else {
          num_tabs = 0;
        }
        num_tabs = parseInt(num_tabs) + 1;

        // Tag title & parameters
        var Comp_Title_Name = ($("#comparison_name").val()).trim();
        var miles_driven = ($("#miles_driven").val()).trim();
        var months = ($("#months").val()).trim();
        var down_payment = ($("#down_payment").val()).trim();
        var interest = ($("#interest").val()).trim();
        var incentives = ($("#incentives").val()).trim();
        var gallon_price = ($("#gallon_price").val()).trim();


        $("div#tabs ul").append(
            "<li id='tab-" + num_tabs + "-li'><a href='#tab-" + num_tabs +
                 "'>" + Comp_Title_Name +
                 "<button id='tab-" + num_tabs + "-btn' class='delete-tab-btn'>X</button>" +
            "</a>" +
            "<input id='tab-" + num_tabs + "-cb'  class='delete-tab-cb' type='checkbox'>" +
            "</li>"
        );

        $("div#tabs").append(
            "<div id='tab-" + num_tabs + "'><br>" +
               "<label id='tab-" + num_tabs + "-label'>Set Parameters:-</label><br><br>" +
               "<div class='tag-parameters'>" +
                 "<label id='tab-" + num_tabs + "-label'>Miles Driven/Year :"+ miles_driven + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Months :"+ months + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Down Payment :"+ down_payment + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Interest :"+ interest + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Incentives :"+ incentives + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Gallon Price :"+ gallon_price + "</label><br><br>" +

               "</div><br><br>" +
               "<div class='table' id='tab-" + num_tabs + "-table'></div>" +
            "</div>"

        );
        $("div#tabs").tabs("refresh");

       return num_tabs;

    }





    // ***** CREATE / SHOW CALCULATED TABLE *****
    function show_table(){


        // *********** New Tag Creation *************
        New_Tag_Num = Creating_New_Tag();


        // *********** Table Creation *************
        var col_count = 0;
        var col = CAR_PRICE_LIST[col_count]; //price_start_value
        var Table_id = "Comp-" + New_Tag_Num ;
        //var tableData = "<table id = 'comp-1'>";
        var tableData = "<table id = '" + Table_id + "'>";

        // for loop for MPG price : MPG_PRICE_LIST
        for (var row_count = 0; row_count < MPG_PRICE_LIST.length; row_count++){
             row = MPG_PRICE_LIST[row_count];
             if (row == MPG_PRICE_LIST[0] && col == CAR_PRICE_LIST[0]) {
                 tableData += "<td>Price / Fuel Consumption</td>";

                 for (col_count; col_count < CAR_PRICE_LIST.length; col_count++) {
                      col = CAR_PRICE_LIST[col_count];
                      //Outputs the column values
                      tableData += "<td id = 'rowHeader'>" + col + "</td>"; 
                 }
                 tableData += "<tr>";
             }
             //Outputs the header row values
             tableData += "<td id = 'colHeader'>" + row + "</td>";
             for (col_count = 0; col_count < CAR_PRICE_LIST.length; col_count++) {
                  col = CAR_PRICE_LIST[col_count];
                 //Fills in the cells with the evaluated $/mile and $/month
                 tableData += "<td class = 'cells'>" + calculate_cell(row , col) + "</td>";
             }
             tableData += "</tr>";
        }
        tableData += "</table>";

        //Dynamically displays the table out in the in the HTML document
        Content_Table_id = "tab-" + New_Tag_Num + "-table" ;
        //document.getElementById("tab-1-table").innerHTML = tableData; 
        document.getElementById(Content_Table_id).innerHTML = tableData; 

       CAR_PRICE_LIST = []
       MPG_PRICE_LIST = []
    }


    // ***** FUNCTION : CALCULATION FOR CELL *****
    function calculate_cell(mpg, price){

        var miles_driven = ($("#miles_driven").val()).trim();
        var months = ($("#months").val()).trim();
        var down_payment = ($("#down_payment").val()).trim();
        var interest = ($("#interest").val()).trim();
        var incentives = ($("#incentives").val()).trim();
        var gallon_price = ($("#gallon_price").val()).trim();

        var price_per_gallon = cal_price_per_gallon(gallon_price, mpg);
        var dollars = cal_per_total_cost(price, incentives, down_payment, interest);
        var cost_per_mile = price_per_gallon + (dollars/miles_driven);
        var cost_per_month = price_per_gallon + (dollars / months);

        var cell = "$/mile: " + Number((cost_per_mile).toFixed(2)) + "  " + "$/month: " + Number((cost_per_month).toFixed(2));

        return cell;
    }

    // ***** FUNCTION : CALCULATION FOR PER TOTAL COST *****
    function cal_per_total_cost(msrp,incentive,down_pay_rate,interest_rate){

        Actual_cost = msrp - incentive;
        Down_payment_cost = (down_pay_rate * Actual_cost) / 100;
        Left_Actual_cost_pay = Actual_cost - Down_payment_cost;

        Interest_on_actual_cost = (Left_Actual_cost_pay * interest_rate) /100;
        Final_price = Interest_on_actual_cost + Left_Actual_cost_pay;

        return Final_price;
    }

    // ***** FUNCTION : CALCULATION FOR PRICE/GALLON *****
    function cal_price_per_gallon(gallon_price, miles_per_gallon){
        var price_per_gallon = gallon_price/miles_per_gallon;
        return price_per_gallon;
    }

