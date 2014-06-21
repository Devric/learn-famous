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
    var View          = require('famous/core/View')
    var Easing        = require('famous/transitions/Easing')

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

    // now we transition it
    mod.setTransform(
            Transform.translate(0,300,0),
            {duration:8000,curve:'linear'}
    )

    surface.on('click', function(){
        // halting on the first animation
        mod.halt()
        surface.setContent('halted')

        // but this new animation will carry out immediately
        mod.setTransform(
            Transform.translate(0,400,0),
            {duration:400,curve:Easing.outBounce}
        )
    })

});
