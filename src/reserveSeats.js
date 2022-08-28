import { Seats } from '@/seats'

// Random reserve seats

export const reserveSeats = (countReservedSeats) => {
  const seats = Seats.seats

  if (countReservedSeats > 0.9) {
    $('.seat').addClass('unavailable')
    return seats.forEach(seat => seat.isAvailable = false)
  }

  const length = seats.length
  const unavailableLength = Math.floor(length * countReservedSeats)
  const randomSeatsIndexes = []

  while (randomSeatsIndexes.length != unavailableLength) {
    const rendomIndex = Math.floor(Math.random() * (length - 1))

    if (!randomSeatsIndexes.includes(rendomIndex)) {
      randomSeatsIndexes.push(rendomIndex)
    }
  }

  Seats.updateSeats(randomSeatsIndexes)
}
