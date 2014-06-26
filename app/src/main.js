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
    var Utility          = require('famous/utilities/Utility')
    var mainContext      = Engine.createContext()
    var SlideData        = require('data/SlideData')
    var AppView          = require('views/AppView')
    
    Utility.loadURL(SlideData.getUrl(), initApp)

    function initApp(data) {
        data = SlideData.parse(data)

        var appView = new AppView({data:data})
        mainContext.add(appView)
    }
});

