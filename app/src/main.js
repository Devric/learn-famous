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
    var myView = new View()

    var surface = new Surface({
        size : [undefined,100]
      , content : 'click me'
      , properties : {
            color: 'white'
          , textAlign: 'center'
          , backgroundColor: '#fa5c4f'
        }
    })

    mainContext.add(myView)
    myView.add(surface)

    surface.pipe(myView)
    // or myView.subscribe(surface)


    // when pipe into a view or subscribe from a view
    // is actullay linking into the input event handler
    // _eventInput
    // look in timbre menu tutorial
    myView._eventInput.on('click', function() {
        surface.setContent('hello')
    })

});

