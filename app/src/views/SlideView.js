//SlideView

define(function(require,exports, module){

    var View = require('famous/core/View')
    var Surface = require('famous/core/Surface')
    var Transform = require('famous/core/Transform')
    var StateModifier = require('famous/modifiers/StateModifier')

    function SlideView() {
        View.apply(this, arguments)

        this.rootModifier = new StateModifier({
            size: this.options.size
        })

        this.mainNode = this.add(this.rootModifier)

        _createBackground.call(this)
        _createFilm.call(this)

    }

    SlideView.prototype = Object.create(View.prototype)
    SlideView.prototype.constructor = SlideView

    SlideView.DEFAULT_OPTIONS = {
        size       : [400,500]
      , filmBorder : 15
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


})
