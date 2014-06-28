/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine           = require('famous/core/Engine');
    var Modifier         = require('famous/core/Modifier');
    var Transform        = require('famous/core/Transform');
    var ImageSurface     = require('famous/surfaces/ImageSurface');
    var Surface          = require('famous/core/Surface')
    var StateModifier    = require('famous/modifiers/StateModifier')
    var View             = require('famous/core/View')
    var Easing           = require('famous/transitions/Easing')
    var SpringTransition = require('famous/transitions/SpringTransition')
    var EventHandler     = require('famous/core/EventHandler')
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout')
    var GridLayout = require('famous/views/GridLayout')
    
    var Transitionable   = require('famous/transitions/Transitionable')
    Transitionable.registerMethod('spring', SpringTransition)

    var mainContext = Engine.createContext()

    var layout

    var grid = new GridLayout({
        dimensions: [4,2]
    })

    var surfaces = []
    grid.sequenceFrom(surfaces)

    var i=0, eightLen=8
    for (; i < eightLen; i++) {
        surfaces.push(new Surface({
            content: "panel " + (i+1)
          , size : [undefined, undefined]
          , properties : {
                backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%,50%)"
              , color: '#404040'
              , lineHeight: '200px'
              , textAlign : 'center'
            }
        }))
    }       

    mainContext.add(grid)

});

