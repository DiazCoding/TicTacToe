'use strict'

const config = require('./config.js')
const store = require('./store.js')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
    return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const userClick = function() {
    return $.ajax({
        method: 'PATCH',
        url: config.apiOrigin + '/user-click/',
    })
}

module.exports = {
  signUp,
  signIn,
  signOut
}