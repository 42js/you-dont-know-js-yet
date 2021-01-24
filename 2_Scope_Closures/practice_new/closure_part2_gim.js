"use strict";

function toggle(...options) {
  let sequence = 0;

  return toggleOption;

  function toggleOption() {
    return options[sequence++ % options.length];
  }
}
