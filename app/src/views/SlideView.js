//SlideView

define(function(require,exports, module){

    var View = require('famous/core/View')
    var Surface = require('famous/core/Surface')
    var ImageSurface = require('famous/surfaces/ImageSurface')
    
    var Transform = require('famous/core/Transform')
    var StateModifier = require('famous/modifiers/StateModifier')
    
    // var SlideData = require('SlideData')
    SlideData = {}
    SlideData.defaultImage = 'a.jpg'
    
    function SlideView() {
        View.apply(this, arguments)

        this.rootModifier = new StateModifier({
            size: this.options.size
          , origin: [0.5,0]
        })

        this.mainNode = this.add(this.rootModifier)

        _createBackground.call(this)
        _createFilm.call(this)
        _createPhoto.call(this)

    }

    SlideView.prototype = Object.create(View.prototype)
    SlideView.prototype.constructor = SlideView

    SlideView.DEFAULT_OPTIONS = {
        size       : [400,500]
      , filmBorder : 15
      , photoBorder : 3
      , photoUrl : SlideData.defaultImage
    }
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

    function _createFilm() {
        this.options.filmSize = this.options.size[0] - 2 * this.options.filmBorder

        var film = new Surface({
            size: [this.options.filmSize, this.options.filmSize]
          , properties : {
                backgroundColor : '#222'
              , zIndex : 1
            }
        })

        var filmMod = new StateModifier({
            origin: [0.5,0]
          , align: [0.5,0]
          , transform: Transform.translate(0,this.options.filmBorder,1)
        })

        this.mainNode.add(filmMod).add(film)
    }

    function _createPhoto() {
        var photoSize = this.options.filmSize - 2 * this.options.photoBorder
        var photo = new ImageSurface({
            size : [photoSize, photoSize]
          , content : 'this.options.photoUrl'
          , properties: {
                zIndex: 2
            }
        })

        this.photoMod = new StateModifier({
            origin: [0.5,0]
          , align: [0.5,0]
          , transform: Transform.translate(0,this.options.filmBorder,2)
        })

        this.mainNode.add(this.photoMod).add(photo)
    }

})
