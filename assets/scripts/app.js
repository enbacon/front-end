'use strict'

const authEvents = require('./auth/events')
const hangoutEvents = require('./hangout/events')
const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addAuthEventHandlers()
  hangoutEvents.addHangoutEventHandlers()
  hangoutEvents.onInitialGetHangouts()
  $('.before-auth').show()
  $('.after-auth').hide()
  $('.navbar').show()
  // your JS code goes here

  // code for limiting HTML calenders to current date+
  const dtToday = new Date()

  let month = dtToday.getMonth() + 1
  let day = dtToday.getDate()
  const year = dtToday.getFullYear()

  if (month < 10) { month = '0' + month.toString() }
  if (day < 10) { day = '0' + day.toString() }

  const minDate = year + '-' + month + '-' + day

  $('.calender').attr('min', minDate)
})
