﻿// Handles pre-loading the app
goog.require('pixelLab.Preload');
goog.require('eightball.application');

/** @define {boolean} */
var SKIP_PRELOAD = false;

$(document).ready(function () {
  // disable selection
  // from http://aleembawany.com/2009/01/20/disable-selction-on-menu-items-with-this-jquery-extension/
  $('body').each(function () {
    this['onselectstart'] = function () {
      return false;
    };
    this.unselectable = "on";
    jQuery(this).css('-moz-user-select', 'none');
    jQuery(this).css('-webkit-user-select', 'none');
  });

  if (SKIP_PRELOAD) {
    loadApp(true);
  } else {

    var images = preloadAssets.images;
    var sounds = preloadAssets.audios;

    var done = function () {
      $("#loadingbg").delay(500).fadeOut(700, loadApp);
    };

    var progress = function (percent) {
      $('#loadingpg').width((237.0 * percent));
    };

    // show the preload ui
    $('#loadingbg').delay(500).fadeIn(700);


    // load the ui (on a timer so that we start after fading in -- it looks weird otherwise)
    setTimeout(function () { new pixelLab.Preload(images, sounds, progress, done); }, 1500);
  }
});
