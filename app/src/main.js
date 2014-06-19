/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface')

    var mainContext = Engine.createContext()
    var firstSurface = new Surface({
        content : 'hello world'
    })

    mainContext.add(firstSurface)

});
