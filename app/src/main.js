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

    createSurface();
    createModifiedSurface();

    function createSurface() {
        var surface = new Surface({
            size : [100, 100]
          , content : 'surface'
          , properties : {
                color : 'white'
              , textAli : 'center'
              , backgroundColor : '#FA5C4F'
            }
        })

        mainContext.add(surface)
    }

    function createModifiedSurface() {
        var modifiedSurface = new Surface({
            size : [100, 100]
          , content : 'modified'
          , properties : {
                color : 'white'
              , textAli : 'center'
              , backgroundColor : '#FA5C4F'
            }
        })

        var stateModifier = new StateModifier({
            transform: Transform.translate(150,100,0)
        })

        mainContext.add(stateModifier).add(modifiedSurface)
    }

    // WARNING translate order do matter, if you apply roate before or after translate, the result are different even if it is the same input

});
