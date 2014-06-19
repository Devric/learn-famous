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

    var lsurface = new Surface({
        size : [100, 100]
        , content : 'left surface'
        , properties : {
            color : 'white'
            , textAli : 'center'
            , backgroundColor : '#FA5C4F'
        }
    })
    var rsurface = new Surface({
        size : [100, 100]
        , content : 'right surface'
        , properties : {
            color : 'white'
            , textAli : 'center'
            , backgroundColor : '#FA5C4F'
        }
    })

    var downMod = new StateModifier({
        transform: Transform.translate(0,100,0)
    })
    var rightMod = new StateModifier({
        transform: Transform.translate(150,0,0)
    })

    // this applies to all surface afterwards
    var newPane = mainContext.add(downMod)

    newPane.add(lsurface)

    // lets branch off and add new modifier
    newPane.add(rightMod).add(rsurface)

});
