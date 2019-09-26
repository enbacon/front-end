'use strict'

const showHangouts = require('../templates/show-hangouts.handlebars')
const store = require('./../store')

const updateFeed = function (data) {
  const editData = data.hangouts.map((hangout) => {
    if (hangout.owner === store.user._id) {
      hangout.editable = true
    }
    return hangout
  })
  console.log(editData)

  const showHangoutsHTML = showHangouts({ hangouts: editData, store: store })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const initialUpdateFeed = function (data) {
  const showHangoutsHTML = showHangouts({ hangouts: data.hangouts, store: store })
  $('.temporary-hangout-holder').html(showHangoutsHTML)
}

const eventCreateFailure = function () {
// more code
}

module.exports = {
  updateFeed,
  eventCreateFailure,
  initialUpdateFeed
}
