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

    var Transitionable = require('famous/transitions/Transitionable')
    var SnapTransition = require('famous/transitions/SnapTransition')
    Transitionable.registerMethod('spring', SnapTransition)

    var MouseSync   = require('famous/inputs/MouseSync')
    var TouchSync   = require('famous/inputs/TouchSync')
    var ScrollSync  = require('famous/inputs/ScrollSync')
    var GenericSync = require('famous/inputs/GenericSync')
    
    GenericSync.register({
        "mouse"  : MouseSync
      , "touch"  : TouchSync
    })

    var sync = new GenericSync(['mouse','touch'], {
        direction: GenericSync.DIRECTION_X
    })

    var DISPLACEMENT_LIMIT     = 100
    var DISPLACEMENT_PEEK      = 50
    var DISPLACEMENT_THRESHOLD = 200
    var VELOCITY_THRESHOLD     = 0.2
    var SURFACE_SIZE           = [200,200]

    var position = new Transitionable(0)

    var background = new Surface({
        size: SURFACE_SIZE,
        properties : {background:'black'}
    })

    var draggableSurface = new Surface({
        size: SURFACE_SIZE,
        properties : {background:'red'}
    })

    var textSurface = new Surface({
        size : SURFACE_SIZE,
        content : '➵',
        properties: {
            fontSize : '100px',
            lineHeight: SURFACE_SIZE[1] + 'px',
            textAlign : 'center',
            pointerEvents : 'none',
            textShadow: '0 0 2px white'
        }
    })

    draggableSurface.pipe(sync)

    sync.on('update', function(data) {
        var curPos = position.get()
        var delta = data.delta

        if (curPos + delta < DISPLACEMENT_LIMIT) {
            position.set(curPos+delta)
        } else {
            position.get(DISPLACEMENT_LIMIT)
        }

        if (curPos + delta < -DISPLACEMENT_PEEK)
            position.set(-DISPLACEMENT_PEEK)
    })

    sync.on('end', function(data) {
        var curPos = position.get()
        var velocity = data.velocity

        if (curPos>DISPLACEMENT_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
            position.set(DISPLACEMENT_LIMIT, {
                method   : 'snap',
                period   : 200,
                velocity : velocity
            })
        } else {
            position.set(0, {
                method   : 'snap',
                period   : 200,
                velocity : velocity
            })
        }
    })

    var positionMod = new Modifier({
        transform:  function() {
            return Transform.translate(position.get(),0,0)
        }
    })

    var rotationMod = new Modifier({
        transform : function() {
            var angle = Math.PI * (position.get() / DISPLACEMENT_LIMIT)
            return Transform.rotateZ(angle)
        }
    })

    var centerMod = new Modifier({origin: [0.5,0.5]})


    var mainContext = Engine.createContext()
    var centerNode = mainContext.add(centerMod)
    centerNode.add(background)

    var movableNod = centerNode.add(positionMod)
    movableNod.add(draggableSurface)
    movableNod.add(rotationMod).add(textSurface)

});

