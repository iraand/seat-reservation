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
const rows = seats.reduce((accum, seat) => { 
    if (seat.section === 'auditorium' && seat.row === 1) accum[0].push(seat);
    if (seat.section === 'auditorium' && seat.row === 2) accum[1].push(seat);
    if (seat.section === 'auditorium' && seat.row === 3) accum[2].push(seat);
    if (seat.section === 'auditorium' && seat.row === 4) accum[3].push(seat);
    
    if (seat.section === 'balconyMid' && seat.row === 1) accum[4].push(seat);
    if (seat.section === 'balconyLeft' && seat.row === 1) accum[5].push(seat);
    if (seat.section === 'balconyRight' && seat.row === 1) accum[6].push(seat);
    
    if (seat.section === 'auditorium' && seat.row === 5) accum[7].push(seat);
    if (seat.section === 'auditorium' && seat.row === 6) accum[8].push(seat);
    
    if (seat.section === 'auditorium' && seat.row === 7) accum[9].push(seat);
    if (seat.section === 'auditorium' && seat.row === 8) accum[10].push(seat); 

    if (seat.section === 'balconyMid' && seat.row === 2) accum[11].push(seat);
    if (seat.section === 'balconyLeft' && seat.row === 2) accum[12].push(seat);
    if (seat.section === 'balconyRight' && seat.row === 2) accum[13].push(seat);
    
    
    if (seat.section === 'boxLeft1' && seat.row === 1) accum[14].push(seat);   
    if (seat.section === 'boxLeft1' && seat.row === 2) accum[14].push(seat); 
    if (seat.section === 'boxLeft2' && seat.row === 1) accum[15].push(seat);   
    if (seat.section === 'boxLeft2' && seat.row === 2) accum[15].push(seat); 
    if (seat.section === 'boxRight1' && seat.row === 1) accum[16].push(seat);   
    if (seat.section === 'boxRight1' && seat.row === 2) accum[16].push(seat); 
    if (seat.section === 'boxRight2' && seat.row === 1) accum[17].push(seat);   
    if (seat.section === 'boxRight2' && seat.row === 2) accum[17].push(seat);                               
    return accum;

}, [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]);

const findTheBestAvailableSeats = (numPersons) => {

    for ( let row of rows ){
        let indexOfmiddle = Math.floor(row.length/2);           

        let left = row.slice(0, indexOfmiddle+4).reverse();
        let right = row.slice(indexOfmiddle-2, row.length);
        let middle = row.slice(indexOfmiddle-1, indexOfmiddle+3);
        let theBestAvailableSeats = [];

        if (numPersons > 5){   
            theBestAvailableSeats = collectAvailableAllRowSeats(row, numPersons);
            if(theBestAvailableSeats.length >= numPersons) {
                console.log(`this is row`);
                createMassage(theBestAvailableSeats);
                return theBestAvailableSeats;
            }
        }

        theBestAvailableSeats = collectAvailableSideSeats(middle, numPersons);
        if(theBestAvailableSeats.length >= numPersons) {
            console.log(`this is middle`);
            createMassage(theBestAvailableSeats);
            return theBestAvailableSeats;
        } 

        theBestAvailableSeats = collectAvailableSideSeats(left, numPersons);
        if(theBestAvailableSeats.length >= numPersons) {
            console.log(`this is left side`);

            createMassage(theBestAvailableSeats);
            return theBestAvailableSeats;
        };            

        theBestAvailableSeats = collectAvailableSideSeats(right, numPersons);           
        if(theBestAvailableSeats.length >= numPersons) {
            console.log(`this is right side`);
            createMassage(theBestAvailableSeats);
            return theBestAvailableSeats;
        }; 
        
        if (rows.indexOf(row) === 14 || rows.indexOf(row) === 15 || rows.indexOf(row) === 16 || rows.indexOf(row) === 17) {
            theBestAvailableSeats = collectAvailableBoxSeats(row, numPersons); 

            if(theBestAvailableSeats.length >= numPersons) {
                console.log(`this is right side`);
                createMassage(theBestAvailableSeats);
                return theBestAvailableSeats;
            }; 
        }        
    } 

    console.log("No seats found!")
    createMassage(null);     
}

const collectAvailableSideSeats = (side, numPersons) => {
    let collectionAvailableSeats = [];
    
    for (seat of side){
        if(seat.isAvailable){
            collectionAvailableSeats.push(seat);
            if(collectionAvailableSeats.length >= numPersons) return collectionAvailableSeats;
        }else{
            collectionAvailableSeats.splice(0, collectionAvailableSeats.length);
        }
    }
    return collectionAvailableSeats;
}

const collectAvailableAllRowSeats = (row, numPersons) => {
    let collectionAvailableSeats = [];
    
    for (seat of row){
        if(seat.isAvailable){
            collectionAvailableSeats.push(seat);
        }else{
            if(collectionAvailableSeats.length >= numPersons) {
                collectionAvailableSeats.sort((a, b) => b.price - a.price);
                console.log(collectionAvailableSeats)  
                return collectionAvailableSeats.slice(0, numPersons);    
            }

            collectionAvailableSeats.splice(0, collectionAvailableSeats.length);
        }
    }
    
    if(collectionAvailableSeats.length >= numPersons) {
        console.log(`this is for ${numPersons} persons`);
        console.log(collectionAvailableSeats)
        // let cut = Math.floor((collectionAvailableSeats.length - numPersons)/2); 
        // return collectionAvailableSeats.slice(cut, collectionAvailableSeats.length - cut);      
        collectionAvailableSeats.sort((a, b) => b.price - a.price);
        return collectionAvailableSeats.slice(0, numPersons);    
    }

    return collectionAvailableSeats;  
}

const collectAvailableBoxSeats = (row, numPersons) => {
    let collectionAvailableSeats = [];
    
    for (seat of row){
        if(seat.isAvailable){
            collectionAvailableSeats.push(seat);
        }
    }

    if (collectionAvailableSeats.length >= numPersons) {
        return collectionAvailableSeats.slice(0, numPersons+1)
    }

    console.log(`this is box`)
    console.log(collectionAvailableSeats)
    return collectionAvailableSeats;
}


const createMassage = (found) => {
    $(".proces").removeClass("visible");          
    $(".result").addClass("visible");
    let massage = " No seats found! Input less persons or less number of reserved seats!";
    if(!found) {
        return $('.num').html(massage); 
    }

    massage = found.map((seat, i) => {
        $(`#${seat.seatID}`).addClass("best");
        return ` ${i+1}. Section: ${seat.section}, Row: ${seat.row}, Seat: ${seat.seat}, Price: ${seat.price} Ft<br>`;           
    });

    $('.num').html(massage);  
}