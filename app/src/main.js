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
    
    var Transitionable   = require('famous/transitions/Transitionable')
    Transitionable.registerMethod('spring', SpringTransition)

    var mainContext = Engine.createContext()

    var surface = new Surface({
        size : [undefined,100]
      , content : 'click me'
      , properties : {
            color: 'white'
          , textAlign: 'center'
          , backgroundColor: '#fa5c4f'
        }
    })

    mainContext.add(surface)

    var eventHandler = new EventHandler()
    var eventHandlerTwo = new EventHandler()

    eventHandlerTwo.subscribe(eventHandler)

    // listen hi
    eventHandlerTwo.on('hi', function(){
        surface.setContent('reset')
    })

    // trigger hi
    surface.on('click', function(){
        eventHandler.emit('hi')
    })

});

