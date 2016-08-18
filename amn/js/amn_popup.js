$(document).ready(function(){
    $(document).click(function (e) {
        if (e.target === $('#my_modal')[0] && $('body').hasClass('modal-open')) {
            removeModal();
        }
    })
});
function removeModal() {
    $(".modal").remove();
    $(".modal-backdrop").remove();
    $("body").removeClass("modal-open");
    $("body").css({
        "overflow-y":"scroll",
        "padding-right":"0px"
    });
}
function showPopup(url, title, height, width) {
    var height = typeof height !== 'undefined' ?  height : "80vh";
    var width = typeof width !== 'undefined' ?  width : "95vw";
    var html =
        '<div id="my_modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
            '<div class="modal-dialog" role="document" style="width:' + width + ';">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="removeModal();">' +
                            '<span aria-hidden="true">&times;</span>' +
                        '</button>' +
                        '<h4 class="modal-title" id="myModalLabel">' + title + '</h4>' +
                    '</div>' +
                    '<div class="modal-body" style="height:' + height + ';">' +
                        '<iframe src="' + url + '" frameborder="0" height="100%" width="100%" scrolling="auto"></iframe>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            removeModal();
        }
    });

    $("body").append(html);
    $("body").css({
        "overflow":"hidden",
        "padding-right":"17px"
    });
    $(".modal").modal({backdrop: 'static', keyboard: true});
    $(".modal-dialog").draggable({
          handle: ".modal-header"
    });
}

function closePopupWindow() {
    jQuery(".close").trigger("click");
}
function popupSelect(table_id, obj_data, close_popup) {
	eval(obj_data.CallbackFunction + "(table_id, obj_data);");
	var closePopup = true;
	if (close_popup != null && close_popup != undefined) {
		closePopup = close_popup;
	}
	if (closePopup) {
		jQuery(".close").trigger("click");
	}
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}
function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}
function wheel(e) {
  preventDefault(e);
}
function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}
function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, true);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}
