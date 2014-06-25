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

    var AppView = require('views/AppView')
    

    var mainContext = Engine.createContext()

    var appView = new AppView()
    mainContext.add(appView)

});

