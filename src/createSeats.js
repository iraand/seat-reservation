import { Seats } from '@/seats'
const seats = Seats.seats

export const createSeats = () => {
  const auditorium = seats.filter(seat => seat.section === 'auditorium')
  const balconyMid = seats.filter(seat => seat.section === 'balconyMid')
  const balconyLeft = seats.filter(seat => seat.section === 'balconyLeft')
  const balconyRight = seats.filter(seat => seat.section === 'balconyRight')
  const boxLeft1 = seats.filter(seat => seat.section === 'boxLeft1')
  const boxLeft2 = seats.filter(seat => seat.section === 'boxLeft2')
  const boxRight1 = seats.filter(seat => seat.section === 'boxRight1')
  const boxRight2 = seats.filter(seat => seat.section === 'boxRight2')

  const row = "<div class='row'></div>"
  const row2 = "<div class='row2'></div>"

  /** * Create Auditorium's seats *************************/

  auditorium.map((seat, i) => {
    if (i === 14 || i === 29 || i === 45 || i === 62 || i === 80 || i === 99 || i === 119) auditorium.push(row)

    const _seat = `<div id='${seat.seatID}' 
                data-section='${seat.section}'
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    auditorium.push(_seat)
  })
  window.onload = function () { console.log(document.getElementById('#auditorium-panel')) }
  $('#auditorium-panel').html(auditorium)

  /** * Create Balcony's seats ***************************/
  balconyMid.map((seat, i) => {
    if (i === 18) balconyMid.push(row)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    balconyMid.push(seat)
  })
  $('#balcony-mid').html(balconyMid)

  balconyLeft.map((seat, i) => {
    if (i === 4) balconyLeft.push(row)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    balconyLeft.push(seat)
  })
  $('#balcony-left').html(balconyLeft)

  balconyRight.map((seat, i) => {
    if (i === 4) balconyRight.push(row)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    balconyRight.push(seat)
  })
  $('#balcony-right').html(balconyRight)

  /** * Create Left Boxes seats ***************************/
  boxLeft1.map((seat, i) => {
    if (i === 3) boxLeft1.push(row2)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    boxLeft1.push(seat)
  })
  $('#box-left1').html(boxLeft1)

  boxLeft2.map((seat, i) => {
    if (i === 3) boxLeft2.push(row2)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    boxLeft2.push(seat)
  })
  $('#box-left2').html(boxLeft2)

  /** * Create Right Boxes seats ***************************/
  boxRight1.map((seat, i) => {
    if (i === 3) boxRight1.push(row2)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    boxRight1.push(seat)
  })
  $('#box-right1').html(boxRight1)

  boxRight2.map((seat, i) => {
    if (i === 3) boxRight2.push(row2)

    seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`
    boxRight2.push(seat)
  })

  $('#box-right2').html(boxRight2)
}
