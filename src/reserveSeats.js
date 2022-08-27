import { Seats } from '@/seats';

// Random reserve seats 

export const reserveSeats = (countReservedSeats) => {
    let seats = Seats.seats;

    if(countReservedSeats > 0.9){
        $(".seat").addClass("unavailable");             
        return seats.forEach(seat => seat.isAvailable = false);
    }

    const length = seats.length,
        unavailableLength = Math.floor(length * countReservedSeats),
        randomSeatsIndexes = [];

    while (randomSeatsIndexes.length != unavailableLength) {
        let rendomIndex = Math.floor(Math.random() * (length-1));

        if (!randomSeatsIndexes.includes(rendomIndex)) {
            randomSeatsIndexes.push(rendomIndex);                    
        }
    }
    
    Seats.updateSeats(randomSeatsIndexes);
}
 