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
    var Transitionable   = require('famous/transitions/Transitionable')
    Transitionable.registerMethod('spring', SpringTransition)
    

    var mainContext = Engine.createContext()
    var view = new View()

    var surface = new Surface({
        size : [100,100]
      , properties : {
            color: 'white'
          , backgroundColor: '#fa5c4f'
        }
    })

    // lets add this modifier
    var mod = new StateModifier({
        origin: [0.5,0]
    })
    mainContext.add(mod).add(surface)

    var spring = {
        method: 'spring',
        period: 1000,
        dampingRatio: 0.3
    }

    mod.setTransform(
        Transform.translate(0,400,0), spring
    )
});

