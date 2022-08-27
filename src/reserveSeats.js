// Random reserve seats 

export const reserveSeats = (countReservedSeats) => {

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
    
    updateSeats(randomSeatsIndexes);
}

const updateSeats = (randomIndexes) => {  
    $(".seat").removeClass("unavailable");

    return seats = seats.map((seat, index) =>{
        if (randomIndexes.includes(index)) {            
            $(`#${seat.seatID}`).addClass("unavailable");
            seat.isAvailable = false;
            return seat;
        }
        seat.isAvailable = true;   
        return seat;
    });
}    