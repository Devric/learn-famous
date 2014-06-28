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

    // 3 section grid layout

    createLayout()
    addHeader()
    addContent()
    addFooter()

    function createLayout() {
        layout = new HeaderFooterLayout({
            headerSize: 100
          , footerSize : 50
        })

        mainContext.add(layout)
    }

    function addHeader() {
        layout.header.add(new Surface({
            content: "header"
          , classes: ["grey-bg"]
          , properties : {
                lineHeight: "100px"
              , textAlign: "center"
          }
        }))
    }

    function addContent() {
        layout.content.add(createGrid('content', [2,1]))
    }

    function addFooter() {
        layout.footer.add(createGrid('footer', [3,1]))
    }

    function createGrid(section, dimensions) {
        var grid = new GridLayout({
            dimensions: dimensions
        })

        var surfaces = []
        grid.sequenceFrom(surfaces)

        var i=0
        for (; i < dimensions[0]; i++) {
            surfaces.push(new Surface({
                content: section + ' ' + (i+1)
              , size : [undefined, undefined]
              , properties: {
                    backgroundColor: "hsl(" + (i*360/8) + ",100%,50%)"
                  , color: "#404040"
                  , textAlign: 'center'
              }
            }))
        }
        return grid
    }

});

