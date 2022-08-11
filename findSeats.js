$(() => { 
    const handleClick = (e) => {
        e.preventDefault; 
        $('.seat').removeClass("best");
        $("button").addClass("disable");
         
        let value = $("#visitors").val();

        findTheBestAvailableSeats(value);
    };

    $("button").on('click', handleClick);
});

const findTheBestAvailableSeats = (numPersons) => {
    let theBestAvailableSeats = [],
        availableSeats = createCollections(seats, numPersons);

    if (!availableSeats || availableSeats.length <= 0){
        console.log("No seats found! Input less persons or less number of reserved seats!");
        createMassage(null);
        return;
    }

    availableSeats.sort((a, b) => {return b.price - a.price});
    
    let rowOfAvailableSeats = createRow(availableSeats);
    console.log(rowOfAvailableSeats[0].collection);

    if (rowOfAvailableSeats.length < 2){
        if (rowOfAvailableSeats[0].collection.length > numPersons){
        
            side = findSide(rowOfAvailableSeats[0].collection);

            console.log(side);
            
            theBestAvailableSeats = formatSeats(rowOfAvailableSeats[0].collection, numPersons, side);
            
            console.log(theBestAvailableSeats);
    
            createMessage(theBestAvailableSeats); 
        
            return theBestAvailableSeats; 
        }

        theBestAvailableSeats = rowOfAvailableSeats[0].collection;   
    
        console.log(theBestAvailableSeats);
    
        createMessage(theBestAvailableSeats); 
    
        return theBestAvailableSeats;
    } 

    if (rowOfAvailableSeats.length >= 1) {  
        let sideOfSeats = {};

        sideOfSeats = rowOfAvailableSeats.reduce((acc, seats) => {
            side = findSide(seats.collection, numPersons);
            console.log(side);

            if (side === "center") {
                acc.center.push(seats); 
            }
            if (side === "left") {
                acc.left.push(seats); 
            }
            if (side === "right") {
                acc.right.push(seats); 
            }

            return acc;
        },{center:[], left:[], right:[]});

        console.log(sideOfSeats);    

        if(sideOfSeats.center.length > 0){
            theBestAvailableSeats = formatSeats(sideOfSeats.center[0].collection, numPersons, "center");
            
            console.log(theBestAvailableSeats);
        
            createMessage(theBestAvailableSeats); 
        
            return theBestAvailableSeats;
        } 
              
        if (sideOfSeats.right.length > 1){
            theBestAvailableSeats = formatSeats(sideOfSeats.right[0].collection, numPersons, "right"); 
               
        } else if (sideOfSeats.left.length > 1){
            theBestAvailableSeats = formatSeats(sideOfSeats.left[sideOfSeats.left.length - 1].collection, numPersons, "left");    
        
        } else if (sideOfSeats.right[0].collection.length > sideOfSeats.left[0].collection.length){
            theBestAvailableSeats = formatSeats(sideOfSeats.right[0].collection, numPersons, "right"); 
        } else if (sideOfSeats.right[0].collection.length < sideOfSeats.left[0].collection.length) {
            theBestAvailableSeats = formatSeats(sideOfSeats.left[0].collection, numPersons, "left"); 
        } 

        console.log(theBestAvailableSeats);
        
        createMessage(theBestAvailableSeats); 
    
        return theBestAvailableSeats;   
    }
}

const createRow = (availableSeats) => {
    let startRow = availableSeats[0].row,
        startSection = availableSeats[0].section,
        rowOfAvailableSeats = [];

    for (let i = 0; i < availableSeats.length; i++){
        if (availableSeats[i].row === startRow &&
            availableSeats[i].section === startSection) {

            rowOfAvailableSeats.push(availableSeats[i]);
        } 
    } 
    
    return rowOfAvailableSeats;
}

const formatSeats = (theBestAvailableSeats, numPersons, side) => {
    const lengthOfTheBestAvailableSeats = theBestAvailableSeats.length,
        cutNum = theBestAvailableSeats.length - numPersons,
        halfCutNum = Math.floor(cutNum/2);

    if (side === 'center') {
        theBestAvailableSeats = theBestAvailableSeats.slice(halfCutNum, lengthOfTheBestAvailableSeats - halfCutNum);
        if (cutNum % 2 !== 0) {
            return theBestAvailableSeats.slice(1, theBestAvailableSeats.length);
        }

        return theBestAvailableSeats;
    }

    if (side === 'left') {
        return theBestAvailableSeats.slice(cutNum, lengthOfTheBestAvailableSeats);                        
    }    

    if (side === 'right') {
        return theBestAvailableSeats.slice(0, lengthOfTheBestAvailableSeats-cutNum); 
    }

    return theBestAvailableSeats;
}

const findSide = (theBestAvailableSeats, numPersons) => {
    const rowOfTheBestAvailableSeats = theBestAvailableSeats[0].row;
    const sectionOfTheBestAvailableSeats = theBestAvailableSeats[0].section;
    const lengthOfTheBestAvailableSeats = theBestAvailableSeats.length;   

    if (sectionOfTheBestAvailableSeats === 'auditorium' ||
        sectionOfTheBestAvailableSeats === 'balconyMid'){
        const row = seats.reduce((accum, seat) => { 
            if (seat.section === 'auditorium' && seat.row === rowOfTheBestAvailableSeats) accum.push(seat);                            
            return accum;
        
        }, []); 

        let lastSeats = row[row.length - 1].seat - theBestAvailableSeats[lengthOfTheBestAvailableSeats - 1].seat;
        let firstSeats = theBestAvailableSeats[0].seat - row[0].seat;

        if (firstSeats - lastSeats > 2) return "right";
        
        if (lastSeats - firstSeats > 2)  return "left";
        
        if (lastSeats === firstSeats)  return "center";
                
        return "center";                    
    }     
}

const createCollections = (seats, numPersons) => {
    let collection = [],
        collections = [],
        numSeat =0, section, row, price;

    for (let seat of seats){

        if (seat.isAvailable){
            if (collection && collection.length > 0){
                if(seat.section === section && seat.row === row && seat.price === price && seat.seat - numSeat === 1){
                    collection.push(seat);
                    numSeat = seat.seat;
                } else {
                    if (collection.length >= numPersons){
                        collections.push({price: collection[0].price, section: collection[0].section, row: collection[0].row, collection })
                        collection = [];
                        numSeat = 0;               
                    }
                    collection = [];
                    numSeat = 0;

                    collection.push(seat);
                    section = seat.section;
                    row = seat.row;
                    price = seat.price;
                    numSeat = seat.seat; 

                }                
            }else{
                collection.push(seat);
                section = seat.section;
                row = seat.row;
                price = seat.price;
                numSeat = seat.seat; 
            }
                        
        } else {
            if (collection.length >= numPersons){
                collections.push({price: collection[0].price, section: collection[0].section, row: collection[0].row, collection })             
            }
            collection = [];
            numSeat = 0;
        }    
    }

    return collections;

}

const createMessage = (found) => {
    $(".proces").removeClass("visible");          
    $(".result").addClass("visible");
    let message = " No seats found! Input less persons or less number of reserved seats!";

    if(!found) {
        return $('.num').html(message); 
    }

    message = found.map((seat, i) => {
        $(`#${seat.seatID}`).addClass("best");
        return ` ${i+1}. Section: ${seat.section}, Row: ${seat.row}, Seat: ${seat.seat}, Price: ${seat.price} Ft<br>`;           
    });

    $('.num').html(message);  
}