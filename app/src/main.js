/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine        = require('famous/core/Engine');
    var Modifier      = require('famous/core/Modifier');
    var Transform     = require('famous/core/Transform');
    var ImageSurface  = require('famous/surfaces/ImageSurface');
    var Surface       = require('famous/core/Surface')
    var StateModifier = require('famous/modifiers/StateModifier')
    

    var mainContext = Engine.createContext()

    var stateModifier = new StateModifier({
        transform: Transform.translate(150,100,0)
    })

    var firstSurface = new Surface({
        size : [200, 200]
      , properties : {
          backgroundColor : '#FA5C4F'
        }
    })

    mainContext.add(stateModifier).add(firstSurface)
});
