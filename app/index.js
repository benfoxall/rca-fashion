var FontFaceObserver = require('fontfaceobserver')

require('./intersection-observer.js')

const qs = document.querySelector.bind(document)
const qsa = document.querySelectorAll.bind(document)

const CLOSED = 0
const OPEN = 1

class Drop {
  constructor(element) {
    this.root = element
    this.current = element.querySelector('.drop-current')
    this.options = element.querySelector('.drop-options')
    this.match_size()


    let state = CLOSED
    const close = () => {
      this.options.style.display = 'none'
      this.root.parentNode.style.zIndex = 2000
      state = CLOSED
    }
    const open = () => {
      this.options.style.display = 'block'
      this.root.parentNode.style.zIndex = 2100
      state = OPEN
    }
    const toggle = (e) => {
      if(e && e.preventDefault()) e.preventDefault()
      if(state === CLOSED) {
        open();
      } else {
        close();
      }
    }

    // this kind of works on mobile
    this.root.addEventListener('mouseenter', open, false)
    this.root.addEventListener('mouseleave', close, false)

    this.current.addEventListener('touchstart', toggle, false)
    document.body.addEventListener('touchstart', e => {
      if(!this.root.contains(e.target)) close()
    }, false)

  }

  match_size() {
    const current_display = this.options.style.display

    this.options.style.display = 'block'

    this.current.style.width = this.options.style.width = ''

    const width = Math.max(
      parseFloat(getComputedStyle(this.current).width),
      parseFloat(getComputedStyle(this.options).width)
    )

    this.current.style.width = this.options.style.width = width + 'px'

    this.options.style.display = current_display
  }
}

const drops = Array.from(qsa('.drop'))
  .map(drop => new Drop(drop))


var font = new FontFaceObserver('BentonSans-Bold')

font.load().then(function () {
  drops
    .forEach(d => d.match_size())
})


// TODO
// const assetList = qs('#asset-list')



var observer = new IntersectionObserver((intersections)=> {
  intersections.forEach(intersect => {
    intersect.target.classList.toggle('offscreen', !intersect.isIntersecting)
  })
})

Array.from(document.querySelectorAll('#asset-list li'))
.forEach(img => {
  observer.observe(img);
})
