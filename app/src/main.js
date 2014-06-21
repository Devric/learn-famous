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

    var align = [0.5,0.5]
    var origin = [0.5,0.5]

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
    var mod = new StateModifier()
    mainContext.add(mod).add(surface)

    // now we transition it
    mod.setTransform(
            Transform.translate(100,300,0),
            {duration:1000,curve:'easeInOut'}
    )

    mod.setTransform(
        Transform.translate(100, 300, 0),
        { duration : 800, curve: Easing.outElastic },
        function() {
            surface.setContent('finished');
        }
    );

});
