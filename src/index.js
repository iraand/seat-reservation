import { createSeats } from './createSeats';
import { reserveSeats } from './reserveSeats';
import { findTheBestAvailableSeats } from './findSeats';

$(window).ready(function() {
    createSeats(); 
    reserveSeats(0.2);      
});

$(() => { 
    const handleChange = (e) => {
        $('.seat').removeClass("best");
        $("button").removeClass("disable");

        let value = Number(e.target.value); 
        
        reserveSeats(value);                      
    };

    $("#select").on('change', handleChange);
}); 

$(() => { 
    const handleChangeVisitors = (e) => {
        e.preventDefault; 
        $('.seat').removeClass("best");
        $("button").removeClass("disable");
    };

    $("#visitors").on('change', handleChangeVisitors);
});

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