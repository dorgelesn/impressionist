/**
 * Load impressionist.css
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
(function ( document, window ) {
    'use strict';
    // Just load it ASAP. No need to wait for impressionist:init
    impressionist().util.loadCss(process.resourcesPath + "/../../../../css/impressionist.css");

})(document, window);
