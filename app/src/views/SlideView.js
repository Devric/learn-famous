//SlideView

define(function(require,exports, module){

    var View = require('famous/core/View')
    var Surface = require('famous/core/Surface')
    var Transform = require('famous/core/Transform')
    var StateModifier = require('famous/modifiers/StateModifier')

    function SlideView() {
        View.apply(this, arguments)

        this.rootModifier = new StateModifier({
            size: [400,500]
        })

        this.mainNode = this.add(this.rootModifier)

        _createBackground.call(this)

    }

    SlideView.prototype = Object.create(View.prototype)
    SlideView.prototype.constructor = SlideView

    SlideView.DEFAULT_OPTIONS = {}
    module.exports = SlideView


    /** PRIVATE FUNC **/
    function _createBackground() {
        var bg = new Surface({
            properties: {
                backgroundColor: '#fffff5'
            , boxShadow : '0 10px 20px -5px rgba(0,0,0,0.5)'
            }
        })
        this.mainNode.add(bg)
    }


})
