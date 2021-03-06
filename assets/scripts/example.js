'use strict'

const config = require('./config')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled

const authEvents = require('./events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})