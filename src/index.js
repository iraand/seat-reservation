import $ from 'jquery'
import jQuery from 'jquery'
import { createSeats } from '@/createSeats'
import { reserveSeats } from '@/reserveSeats'
import { findTheBestAvailableSeats } from '@/findSeats'
import '@/styles/style.css'
window.$ = jQuery

$(() => {
  createSeats()
  reserveSeats(0.2)
})

$(() => {
  const handleChange = (e) => {
    $('.seat').removeClass('best')
    $('button').removeClass('disable')

    const value = Number(e.target.value)

    reserveSeats(value)
  }

  $('#select').on('change', handleChange)
})

$(() => {
  const handleChangeVisitors = (e) => {
    e.preventDefault
    $('.seat').removeClass('best')
    $('button').removeClass('disable')
  }

  $('#visitors').on('change', handleChangeVisitors)
})

$(() => {
  const handleClick = (e) => {
    e.preventDefault
    $('.seat').removeClass('best')
    $('button').addClass('disable')

    const value = $('#visitors').val()

    findTheBestAvailableSeats(value)
  }

  $('button').on('click', handleClick)
})
