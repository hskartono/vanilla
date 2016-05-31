$(document).ready(function(){

    // hide show left menu
    mediaCheck({
        media: '(max-width: 768px)',
        entry: function() {
            $('#own_content_left').hide();
            $("#own_content_right").attr("class","col-xs-12 col-sm-12 own_padding_null_any");
        },
        exit: function() {
            $('#own_content_left').show();
            $("#own_content_right").attr("class","hidden-xs col-sm-10 own_padding_null_any");
        }
    });
    $("#own_panel_button1, #own_panel_button2").click(function() {
        $("#own_content_left").toggle();
        if ($("#own_content_left").css("display") === "none") {
            $("#own_content_right").attr("class","col-xs-12 col-sm-12 own_padding_null_any");
        } else {
            $("#own_content_right").attr("class","hidden-xs col-sm-10 own_padding_null_any");
        }
    });

    // set height content left if content right is resize
    $('#own_content_right').resize(function(){
        $('#own_content_left').css({'height':''});
        if ($("#own_content_left").height() < $("#own_content_right").height()) {
            leftMenuDetect();
        }
    });
    leftMenuDetect();

    // accordion menu
    $('#main-menu-a').smartmenus({
		hideOnClick: false
	});
    setCurrentMenu('m_212');

    // flyout menu
    $('#main-menu-f').smartmenus({
        hideFunction: null
    });

});

// ICON FOR COLLAPSE EXPAND
function iconColExp(id_heading, action, id_collapse, id_expand) {
	$("#" + id_collapse).show();
	$("#" + id_expand).hide();

	var flag = $('#' + action).hasClass('in');
	if (flag) {
		$("#" + id_collapse).hide();
		$("#" + id_expand).show();
	}

	$("#" + id_heading + " a").click(function() {
		$("#" + id_collapse).toggle();
		$("#" + id_expand).toggle();
	});
}

// GET VALUE ON URL PARAMETER
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

// LESS
less = {
    env: "production",
    async: true,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    rootpath: ":/a.com/"
};

// OS CHECK
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { }

// SET HEIGHT LEFT MENU
function leftMenuDetect() {
    $('#own_content_left').css({'height':''});
    if ($("#own_content_right").height() > $(window).height()) {
        $('#own_content_left').css({'height':($('#own_content_right').height() + 2)});
    }
}

// SET CURRENT MENU
function setCurrentMenu(id_menu) {
    $('#main-menu-a').smartmenus('itemActivate', $('a#'+ id_menu).addClass('own_highlighted'));
    var id_menu_slice = id_menu.slice(0,-1);
    for (i = 1; i <= (id_menu_slice.length - 2); i++) {
        $('a#m_' + id_menu.substr(2,i)).removeClass('highlighted');
    }
}

// DATE TIME PICKER
function calenderTimePicker(id_datetime) {
    $('#' + id_datetime).datetimepicker({
        format: 'DD/MM/YYYY HH:mm'
    });
    $('#' + id_datetime + ' input[type="text"]').click(function(event){
        event.preventDefault();
        $('#' + id_datetime + ' .glyphicon-calendar').click();
    });
}

// DATE TIME PICKER RANGE
function calenderTimePickerRange(id_date_start, id_date_end) {
    calenderTimePicker(id_date_start);
    calenderTimePicker(id_date_end);
    $("#" + id_date_start).on("dp.change", function (e) {
        $('#' + id_date_end).data("DateTimePicker").minDate(e.date);
    });
    $("#" + id_date_end).on("dp.change", function (e) {
        $('#' + id_date_start).data("DateTimePicker").maxDate(e.date);
    });
}

// DATE PICKER
function calenderPicker(id_date) {
    $('#' + id_date).datetimepicker({
        format: 'DD/MM/YYYY'
    });
    $('#' + id_date + ' input[type="text"]').click(function(event){
        event.preventDefault();
        $('#' + id_date + ' .glyphicon-calendar').click();
    });
}

// DATE PICKER RANGE
function calenderPickerRange(id_date_start, id_date_end) {
    calenderPicker(id_date_start);
    calenderPicker(id_date_end);
    $("#" + id_date_start).on("dp.change", function (e) {
        $('#' + id_date_end).data("DateTimePicker").minDate(e.date);
    });
    $("#" + id_date_end).on("dp.change", function (e) {
        $('#' + id_date_start).data("DateTimePicker").maxDate(e.date);
    });
}

// MONTH YEAR PICKER
function monthYearPicker(id_date) {
    $('#' + id_date).datetimepicker({
        viewMode: 'months',
        format: 'MMMM YYYY'
    });
    $('#' + id_date + ' input[type="text"]').click(function(event){
        event.preventDefault();
        $('#' + id_date + ' .glyphicon-calendar').click();
    });
}

// MONTH YEAR PICKER RANGE
function monthYearPickerRange(id_date_start, id_date_end) {
    monthYearPicker(id_date_start);
    monthYearPicker(id_date_end);
    $("#" + id_date_start).on("dp.change", function (e) {
        $('#' + id_date_end).data("DateTimePicker").minDate(e.date);
    });
    $("#" + id_date_end).on("dp.change", function (e) {
        $('#' + id_date_start).data("DateTimePicker").maxDate(e.date);
    });
}

// YEAR PICKER
function yearPicker(id_date) {
    $('#' + id_date).datetimepicker({
        viewMode: 'years',
        format: 'YYYY'
    });
    $('#' + id_date + ' input[type="text"]').click(function(event){
        event.preventDefault();
        $('#' + id_date + ' .glyphicon-calendar').click();
    });
}

// YEAR PICKER RANGE
function yearPickerRange(id_date_start, id_date_end) {
    yearPicker(id_date_start);
    yearPicker(id_date_end);
    $("#" + id_date_start).on("dp.change", function (e) {
        $('#' + id_date_end).data("DateTimePicker").minDate(e.date);
    });
    $("#" + id_date_end).on("dp.change", function (e) {
        $('#' + id_date_start).data("DateTimePicker").maxDate(e.date);
    });
}

// COLOR PICKER
function colorPicker(id_input) {
    $('#' + id_input).colorpicker();
    $('#' + id_input + ' > input[type="text"]').click(function(event){
        event.preventDefault();
        $('#' + id_input + ' > span').click();
    });
    $('#' + id_input + ' > span > i').css({'margin':'-2px'});
}

// FILE STYLE
function fileStyle(id_input) {
    $("#" + id_input).filestyle({
        icon: true,
        iconName: "glyphicon glyphicon-paperclip",
        buttonText: "",
        size: "sm"
    });
}

// RWD TABLE
function tableResponsive(id_table) {
    // for set title in th
    var rowCount = $('#' + id_table + ' tbody tr').length;
    for (i = 1; i <= rowCount; i++) {
        var counter_th = 1;
        $('#' + id_table + ' thead tr th').each(function() {
            var counter = 1;
            $('#' + id_table + ' tbody tr:nth-child(' + i + ') td').each(function() {
                $(this).attr('data-th', $('#' + id_table + ' thead tr th:nth-child(' + counter + ')').html());
                counter++;
            });
            counter_th++;
        });
    }
}
