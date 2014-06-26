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
        _createSlides.call(this)
    }

    SlideshowView.prototype.show = function() {
        var slide = this.slides[this.currentIndex]
        this.lightbox.show(slide)
    }

    SlideshowView.prototype.showNextSlide = function() {
        this.currentIndex++
        if (this.currentIndex === this.slides.length) this.currentIndex = 0
        this.showCurrentSlide()
    }

    function _createSlides() {
        this.slides = []
        this.currentIndex = 0

        var i=0, dataLen = this.options.data.length
        for (; i < dataLen; i++) {
            var slide = new SlideView({
                size: this.options.size
              , photoUrl : this.options.data[i]
            })
            this.slides.push(slide)

            this.on('click', this.showNextSlide.bind(this))
        }

        this.showCurrentSlide()
    }

    SlideshowView.prototype = Object.create(View.prototype)
    SlideshowView.prototype.constructor = SlideshowView

    SlideshowView.DEFAULT_OPTIONS = {
        size         : [450,500]
      , data         : undefined
      , lightboxOpts : {}
    }

    module.exports = SlideshowView

})
