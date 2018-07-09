'use strict'
const api = require('../api')
const ui = require('../ui')
const getFormFields = require('../lib/get-form-fields')
const gameLogic = require('./gamelogic')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
  .done(ui.success)
  .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.fail)
}

const renderBoard = function (event){
  event.preventDefault()
  gameLogic.createBoard()
  gameLogic.createClasses()
  gameLogic.clickHandlers()
  console.log("this works3")
}

//TODO refactor this later
const addHandlers = function(){
  console.log('this works')
  $('#signUp').on('submit', onSignUp)   
  $('#signIn').on('submit', onSignIn)
  $('#createBoard').on('click', renderBoard)
}

module.exports = {
  addHandlers
}