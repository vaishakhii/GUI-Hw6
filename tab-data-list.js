/**
 Name: Vaishakhi Patel, vpatel@cs.uml.edu
 Computer Science Department, UMass Lowell
 Comp.4610, GUI Programming I
 File:
 Created: 21-Nov-2017
 Last updated by VP: 02-Dec-2017 20:00
 **/
$(document).ready(function(){

  $(
     function() {
           $( "#tabs" ).tabs();
     }
  );

  // ************* SELECTING TABS **************
  $(document).on('click','#tabs ul li a', function () {
            $('#tabs ul li a').removeClass('active');
            $(this).addClass('active');
    if (deleting_all_tab_active == false ) {
            $('#tabs ul li a button').css("display","none");
            var v_href = $(this).attr('href');
            console.log(v_href);
            var btn_id = v_href.replace("#","");
            btn_id = btn_id.concat("-btn");
            document.getElementById(btn_id).style.display ="inline-block";
    }
  });

  // ************* SELECTING TABS  AND DELETE **************
  $(document).on('click','#tabs ul li a button', function () {
            var sel_btn_id = $(this).attr('id');

            // converting btn-id to li-id
            var v_li_id = sel_btn_id.replace("btn","li");
            v_li_tag_id = "#" + v_li_id;
            $d(v_li_tag_id).remove();

            // converting li-id for content-id
            v_li_id = v_li_id.replace("-li","");
            v_li_div_id = "#" + v_li_id;
            $d(v_li_div_id).remove();
  });

  var deleting_all_tab_active = false;
  $("button#all-delete-tab").click(function() {
       $('#tabs ul li input').prop("checked", false);
       $('#tabs ul li a button').css("display","none");
       if (deleting_all_tab_active == false){
            $('#tabs ul li input').css("display","inline-block");
            deleting_all_tab_active = true;
            $('#all-delete-confirm-tab').css("display","block");
       } else {
            $('#tabs ul li input').css("display","none");
            $('#all-delete-confirm-tab').css("display","none");
            deleting_all_tab_active = false;
       }
  });

  $("button#all-delete-confirm-tab").click(function() {
            var selected = [];
            $('#tabs ul li input:checked').each(function() {
               selected.push($(this).attr('id'));
            });
            console.log(selected);

         $('#tabs ul li input:checked').each(function() {
            sel_cb_id = ($(this).attr('id'))

            // converting cb-id to li-id
            var v_li_id = sel_cb_id.replace("cb","li");
            v_li_tag_id = "#" + v_li_id;
            $d(v_li_tag_id).remove();

            // converting li-id for content-id
            v_li_id = v_li_id.replace("-li","");
            v_li_div_id = "#" + v_li_id;
            $d(v_li_div_id).remove();
         });
  });




});

