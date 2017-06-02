var FontFaceObserver = require('fontfaceobserver')

const qsa = document.querySelectorAll.bind(document)

class Drop {
  constructor(element) {
    this.root = element
    this.current = element.querySelector('.drop-current')
    this.options = element.querySelector('.drop-options')
    this.match_size()

    this.root.addEventListener('mouseenter', () => {
      console.log("mouse in")
      this.options.style.display = 'block'
    }, false)
    this.root.addEventListener('mouseleave', () => {
      console.log("mouse out")
      this.options.style.display = 'none'
    }, false)
  }

  match_size() {
    this.current.style.width = this.options.style.width = ''

    const width = Math.max(
      parseFloat(getComputedStyle(this.current).width),
      parseFloat(getComputedStyle(this.options).width)
    )

    this.current.style.width = this.options.style.width = width + 'px'
  }
}

const drops = Array.from(qsa('.drop'))
  .map(drop => new Drop(drop))



var font = new FontFaceObserver('BentonSans-Bold')

font.load().then(function () {
  console.log('BentonSans loaded')

  drops
    .forEach(d => d.match_size())
})
