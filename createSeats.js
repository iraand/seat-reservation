

const createSeats = () => {
    const auditorium = seats.filter(seat => seat.section === 'auditorium'),  
        balconyMid = seats.filter(seat => seat.section === 'balconyMid'),
        balconyLeft = seats.filter(seat => seat.section === 'balconyLeft'),
        balconyRight = seats.filter(seat => seat.section === 'balconyRight'),
        boxLeft1 = seats.filter(seat => seat.section === 'boxLeft1'),
        boxLeft2 = seats.filter(seat => seat.section === 'boxLeft2'),
        boxRight1 = seats.filter(seat => seat.section === 'boxRight1'),
        boxRight2 = seats.filter(seat => seat.section === 'boxRight2');

    let row = "<div class='row'></div>";
    let row2 = "<div class='row2'></div>";

    /*** Create Auditorium's seats *************************/
    auditorium.map((seat, i) => {  
        if(i===14 || i===29 || i===45 || i===62 || i===80 || i===99 || i===119)  auditorium.push(row);   

        seat = `<div id=${seat.seatID}  
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        auditorium.push(seat); 
    });

    $('#auditorium-panel').html(auditorium);
    
   /*** Create Balcony's seats ***************************/ 
    balconyMid.map((seat, i) => {  
        if(i===18) balconyMid.push(row);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        balconyMid.push(seat); 
    });

    $('#balcony-mid').html(balconyMid);

    balconyLeft.map((seat, i) => {  
        if(i===4) balconyLeft.push(row);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        balconyLeft.push(seat); 
    });

    $('#balcony-left').html(balconyLeft);
    
    balconyRight.map((seat, i) => {  
        if(i===4) balconyRight.push(row);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        balconyRight.push(seat); 
    });

    $('#balcony-right').html(balconyRight);


   /*** Create Left Boxes seats ***************************/
    boxLeft1.map((seat, i) => {  
        if(i===3) boxLeft1.push(row2);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        boxLeft1.push(seat); 
    });

    $('#box-left1').html(boxLeft1);
    
    boxLeft2.map((seat, i) => {  
        if(i===3) boxLeft2.push(row2);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        boxLeft2.push(seat); 
    });

    $('#box-left2').html(boxLeft2);
   
    /*** Create Right Boxes seats ***************************/
    boxRight1.map((seat, i) => {  
        if(i===3) boxRight1.push(row2);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        boxRight1.push(seat); 
    });

    $('#box-right1').html(boxRight1);

    boxRight2.map((seat, i) => {  
        if(i===3) boxRight2.push(row2);   

        seat = `<div id=${seat.seatID}
                data-section=${seat.section}
                data-price=${seat.price}
                class='seat'>
                ${seat.seat}
            </div>`;
        boxRight2.push(seat); 
    });

    $('#box-right2').html(boxRight2);
};


