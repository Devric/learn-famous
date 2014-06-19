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

    var align = [0.5,0.5]
    var origin = [0.5,0.5]

    var mainContext = Engine.createContext()
    var view = new View()

    view.add(new Surface({
        properties : {
            backgroundColor: '#fa5c4f'
        }
    }))

    var viewMod = new StateModifier({
        size   : [200,200]
      , origin : origin
      , align  : align
    })

    var pos = [
        [0,0]
      , [0,1]
      , [1,0]
      , [1,1]
    ]

    // add the 4 coords in the square
    var i=0, posLen=pos.length
    for (; i < posLen; i++) {
        var surface = new Surface({
            size : [true,true]
          , content : 'origin: ' + pos[i]
        })

        var mod = new StateModifier({
            origin : pos[i]
          , align  : pos[i]
        })

        view.add(mod).add(surface)
    }
    mainContext.add(viewMod).add(view)

    var i=0, posLen=pos.length
    for (; i < posLen; i++) {
        var surface = new Surface({
            size : [true,true]
          , content : 'align: ' + pos[i]
        })

        var mod = new StateModifier({
            origin : pos[i]
          , align  : pos[i]
        })

        mainContext.add(mod).add(surface)
    }
});
