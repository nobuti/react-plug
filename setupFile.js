global.window.resizeTo = (width, height) => {
  global.window.outerWidth = width || global.window.outerWidth
  global.window.outerHeight = height || global.window.outerHeight
  global.window.dispatchEvent(new Event('resize'))
}

global.window.online = () => {
  navigator.__defineGetter__('onLine', () => true)
  global.window.dispatchEvent(new Event('online'))
}

global.window.offline = () => {
  navigator.__defineGetter__('onLine', () => false)
  global.window.dispatchEvent(new Event('offline'))
}

global.window.keyPress = key => {
  global.window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: key }))
}

let hidden = false
Object.defineProperty(global.window.document, 'hidden', {
  configurable: true,
  get: function() {
    return hidden
  }
})

global.window.show = () => {
  hidden = false
  global.window.document.dispatchEvent(new Event('visibilitychange'))
}

global.window.hide = () => {
  hidden = true
  global.window.document.dispatchEvent(new Event('visibilitychange'))
}

let pageXOffset = 0
let pageYOffset = 0

Object.defineProperty(global.window, 'pageXOffset', {
  configurable: true,
  get: function() {
    return pageXOffset
  }
})

Object.defineProperty(global.window, 'pageYOffset', {
  configurable: true,
  get: function() {
    return pageYOffset
  }
})

global.window.scrollTo = (x, y) => {
  pageXOffset = x
  pageYOffset = y
  global.window.dispatchEvent(new UIEvent('scroll'))
}

global.window.requestAnimationFrame = cb => cb()
