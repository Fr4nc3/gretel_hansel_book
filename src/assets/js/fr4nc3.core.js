function preventBehavior(e) {
  e.preventDefault();
}
document.addEventListener('touchmove', preventBehavior, false);

function onBodyLoad() {
  document.addEventListener('deviceready', onDeviceReady, false);
}
function onDeviceReady() {
  document.addEventListener('resume', onResume, false);
}

function onResume() {
  //#menu_common" data-transition="slideup"
  //  $.mobile.changePage($('#menu_principal'),{transition: "slideup"});
}

var callback = function () {
  document.getElementById('movie').addEventListener('ended', myHandler, false);
  function myHandler(e) {
    document.getElementById('vid_container').style.display = 'none';
  }
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
