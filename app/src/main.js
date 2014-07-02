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
    var MouseSync = require('famous/inputs/MouseSync')

    var position = new Transitionable([0,0])
    var sync = new MouseSync()

    var surface = new Surface({
        size : [200,200]
      , properties : {background:'red'}
    })

    surface.pipe(sync)

    sync.on('update', function(data) {
        var currentPos = position.get()
        position.set([
            currentPos[0] + data.delta[0]
          , currentPos[1] + data.delta[1]
        ])
    })

    sync.on('end', function() {
        position.set([0,0], {curve : 'easeOutBounce', duration : 300});
    })

    var positionMod = new Modifier({
        transform:  function() {
            var currentPos = position.get()
            return Transform.translate(currentPos[0], currentPos[1], 0)
        }
    })

    var centerMod = new Modifier({origin:[0.5,0.5]})

    var mainContext = Engine.createContext()

    mainContext.add(centerMod)
               .add(positionMod)
               .add(surface)

});

