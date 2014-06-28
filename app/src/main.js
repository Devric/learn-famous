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
    Transitionable.registerMethod('spring', SpringTransition)

    var mainContext = Engine.createContext()

    var layout

    createLayout()
    addHeader()
    addContent()
    addFooter()

    function createLayout() {
        layout = new HeaderFooterLayout({
            headerSize:100
          , footerSize: 50
        })

        mainContext.add(layout)
    }

    function addHeader() {
        layout.header.add(new Surface({
            content: "header"
          , classes: ["grey-bg"]
          , properties : {
                lineHeight: "100px"
              , textAlign : "center"
          }
        }))
        mainContext.add(layout)
    }

    function addContent() {
        layout.content.add(createGrid('content', [2,1]))
    }

    function addFooter() {
        layout.footer.add(new Surface({
            content: 'Footer'
          , classes: ["grey-bg"]
          , properties : {
                lineHeight: "50px"
              , textAlign : "center"
            }
        }))
    }

    function createGrid(section, dimensions) {
        var grid = new GridLayout({
            dimensions: dimensions
        })

        var views = []

        grid.sequenceFrom(views)

        var i=0, EightLen=8
        for (; i < EightLen; i++) {
            var view = new View()
            var centerMod = new Modifier({
                origin: [0.5,0.5]
            })
            var surface = new Surface({
                content: section + ' ' + (i+1)
              , size : [100,100]
              , classes: ['red-bg']
              , properties : {
                    color: 'white'
                  , textAlign : 'center'
                  , lineHeight: '100px'
                }
            })

            view.add(centerMod).add(surface)
            views.push(view)
        }
        return grid
    }
});

