/*
 * Copyright 2013 The Toolkitchen Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

/**
 * PointerGestureEvent is the constructor for all PointerGesture events.
 *
 * @class PointerGestureEvent
 * @extends UIEvent
 * @constructor
 * @param {String} inType Event type
 * @param {Object} [inDict] Dictionary of properties to initialize on the event
 */

function PointerGestureEvent(inType, inDict) {
  var e = document.createEvent('UIEvent');
  if (Object.__proto__) {
    e.__proto__ = PointerGestureEvent.prototype;
    e.initGestureEvent(inType, inDict);
  } else {
    PointerGestureEvent.prototype.initGestureEvent.call(e, inType, inDict);
  }
  return e;
}

PointerGestureEvent.prototype = Object.create(UIEvent.prototype);

/**
 * Initialize the PointerGestureEvent with an event type, and a dictionary of
 * properties to set.
 *
 * @method initGestureEvent
 * @param {String} inType Event type
 * @param {Object} [inDict] Dictionary of properties to initialize on the event
 */
PointerGestureEvent.prototype.initGestureEvent = function(inType, inDict) {
  var props = {
    bubbles: true,
    cancelable: true,
    view: null,
    detail: null
  };

  for (var k in inDict) {
    props[k] = inDict[k];
  }

  this.initUIEvent(inType, props.bubbles, props.cancelable, props.view, props.detail);

  for (var k in props) {
    this[k] = props[k];
  }
};
/**
 * Allows for any gesture to prevent the tap gesture.
 *
 * @method preventTap
 */
PointerGestureEvent.prototype.preventTap = function() {
  this.tapPrevented = true;
};

