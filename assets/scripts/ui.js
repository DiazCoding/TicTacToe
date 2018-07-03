'use strict'
const store = require('./store.js')

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const win = () => {
    console.log(player[i].email + "wins!")
}

// const placeLetter = (player , arr , index) => {
//     gameBoard[arr][index] = player
//     console.log(player + arr + index)
//     alert('said something')
// }

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  // win,
  // placeLetter
}
