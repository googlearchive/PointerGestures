/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @module PointerGestures
 */
(function() {
  var thisFile = 'pointergestures.js';
  var libLocation = '';
  var require = function(inSrc) {
    document.write('<script src="' + libLocation + inSrc + '"></script>');
  };

  var s = document.querySelector('script[src $= "' + thisFile + '"]');
  if (s) {
    libLocation = s.src.slice(0, -thisFile.length);
  }

  [
    'src/PointerGestureEvent.js',
    'src/initialize.js',
    'src/sidetable.js',
    'src/pointermap.js',
    'src/dispatcher.js',
    'src/hold.js',
    'src/track.js',
    'src/flick.js',
    'src/tap.js'
  ].forEach(require);
})();
