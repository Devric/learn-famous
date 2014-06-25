//SlideshowView

define(function(require,exports, module){

    var View = require('famous/core/View')
    var Surface = require('famous/core/Surface')
    var Transform = require('famous/core/Transform')
    var StateModifier = require('famous/modifiers/StateModifier')
    var Lightbox = require('famous/views/Lightbox')

    var SlideView = require('views/SlideView')

    function _createLightbox() {
        this.lightbox = new Lightbox(this.options.lightboxOpts)
        this.mainNode.add(this.lightbox)
    }

    function SlideshowView() {
        View.apply(this, arguments)
        var slideView = new SlideView()

        this.rootMod = new StateModifier({
            size   : this.options.size
          , origin : [0.5,0]
          , align  : [0.5,0 ]
        })

        this.mainNode = this.add(slideView)
        _createLightbox.call(this)
    }

    SlideshowView.prototype = Object.create(View.prototype)
    SlideshowView.prototype.constructor = SlideshowView

    SlideshowView.DEFAULT_OPTIONS = {
        size         : [450,500]
      , lightboxOpts : {}
    }

    module.exports = SlideshowView

})
