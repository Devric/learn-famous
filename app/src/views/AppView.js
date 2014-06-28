// AppView

define(function(require,exports,module){

    var View = require('famous/core/View')
    var Surface = require('famous/core/Surface')
    var Transform = require('famous/core/Transform')
    var StateModifier = require('famous/modifiers/StateModifier')
    var SlideshowView = require('views/SlideshowView')
    var ImageSurface = require('famous/surfaces/ImageSurface')
    
    
    
    function AppView() {
        View.apply(this, arguments)

        _createCamera.call(this)
        _createSlideShow.call(this)
    }

    function _createSlideShow() {
        var slideshowView = new SlideshowView({
            size : [this.options.slideWidth, this.options.slideHeight]
          , data : this.options.data
        })
        
        var mod = new StateModifier({
            origin: [0.5,0]
          , align: [0.5,0]
          , transform: Transform.translate(0,this.options.slidePosition,0)
        })

        this.add(mod).add(slideshowView)
    }

    function _createCamera() {
        var camera = new ImageSurface({
            size: [this.options.cameraWidth,true]
          , content: 'img/camera./png'
          , properties : {
                width: '100%'
          }
        })

        var mod = new StateModifier({
            origin: [0.5,0]
          , align: [0.5,0]
          , transform: Transform.behind
        })

        this.add(mod).add(camera)
    }

    AppView.prototype = Object.create(View.prototype)
    AppView.prototype.constructor = AppView

    AppView.DEFAULT_OPTIONS = {
        data:undefined
      , cameraWidth : 0.6 * window.innerHeight
    }
    AppView.slideWidth    = 0.8 * AppView.DEFAULT_OPTIONS.cameraWidth
    AppView.slideHeight   = AppView.DEFAULT_OPTIONS.slideWidth + 40
    AppView.slidePosition = 0.77 * AppView.DEFAULT_OPTIONS.cameraWidth

    module.exports = AppView
    
})
