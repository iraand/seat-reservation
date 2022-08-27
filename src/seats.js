const PRICE1 = 500,
    PRICE2 = 400,
    PRICE3 = 300,
    PRICE4 = 200,
    auditorium = 'auditorium',
    balconyMid = 'balconyMid',
    balconyLeft = 'balconyLeft',
    balconyRight = 'balconyRight',
    boxLeft1 = 'boxLeft1',
    boxLeft2 = 'boxLeft2',
    boxRight1 = 'boxRight1',
    boxRight2 = 'boxRight2';

let seats = [    
    /***** auditorium row 1 ***************************/  
    {
        section: auditorium,
        row: 1,
        seat:1,
        seatID: 'a-1-1',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 1,
        seat:2,
        seatID: 'a-1-2',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 1,
        seat:3,
        seatID: 'a-1-3',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 1,
        seat:4,
        seatID: 'a-1-4',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 1,
        seat:5,
        seatID: 'a-1-5',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 1,
        seat:6,
        seatID: 'a-1-6',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 1,
        seat:7,
        seatID: 'a-1-7',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 1,
        seat:8,
        seatID: 'a-1-8',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 1,
        seat:9,
        seatID: 'a-1-9',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 1,
        seat:10,
        seatID: 'a-1-10',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 1,
        seat:11,
        seatID: 'a-1-11',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 1,
        seat:12,
        seatID: 'a-1-12',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 1,
        seat:13,
        seatID: 'a-1-13',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 1,
        seat:14,
        seatID: 'a-1-14',
        price: PRICE1,
        isAvailable: true
    }, 
    /***** auditorium row 2 ***************************/      
    {
        section: auditorium,
        row: 2,
        seat:1,
        seatID: 'a-2-1',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 2,
        seat:2,
        seatID: 'a-2-2',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 2,
        seat:3,
        seatID: 'a-2-3',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 2,
        seat:4,
        seatID: 'a-2-4',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 2,
        seat:5,
        seatID: 'a-2-5',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 2,
        seat:6,
        seatID: 'a-2-6',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 2,
        seat:7,
        seatID: 'a-2-7',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 2,
        seat:8,
        seatID: 'a-2-8',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 2,
        seat:9,
        seatID: 'a-2-9',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 2,
        seat:10,
        seatID: 'a-2-10',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 2,
        seat: 11,
        seatID: 'a-2-11',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 2,
        seat: 12,
        seatID: 'a-2-12',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 2,
        seat: 13,
        seatID: 'a-2-13',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 2,
        seat: 14,
        seatID: 'a-2-14',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 2,
        seat: 15,
        seatID: 'a-2-15',
        price: PRICE2,
        isAvailable: true
    }, 
/***** auditorium row 3 ***************************/  
    {
        section: auditorium,
        row: 3,
        seat: 1,
        seatID: 'a-3-1',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 2,
        seatID: 'a-3-2',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 3,
        seatID: 'a-3-3',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 3,
        seat: 4,
        seatID: 'a-3-4',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 3,
        seat: 5,
        seatID: 'a-3-5',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 3,
        seat: 6,
        seatID: 'a-3-6',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 3,
        seat: 7,
        seatID: 'a-3-7',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 3,
        seat: 8,
        seatID: 'a-3-8',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 9,
        seatID: 'a-3-9',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 10,
        seatID: 'a-3-10',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 3,
        seat: 11,
        seatID: 'a-3-11',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 12,
        seatID: 'a-3-12',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 3,
        seat: 13,
        seatID: 'a-3-13',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 14,
        seatID: 'a-3-14',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 3,
        seat: 15,
        seatID: 'a-3-15',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 3,
        seat: 16,
        seatID: 'a-3-16',
        price: PRICE2,
        isAvailable: true
    }, 
    /***** auditorium row 4 ***************************/  
    {
        section: auditorium,
        row: 4,
        seat: 1,
        seatID: 'a-4-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 2,
        seatID: 'a-4-2',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 3,
        seatID: 'a-4-3',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 4,
        seatID: 'a-4-4',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 5,
        seatID: 'a-4-5',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 4,
        seat: 6,
        seatID: 'a-4-6',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 7,
        seatID: 'a-4-7',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 8,
        seatID: 'a-4-8',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 9,
        seatID: 'a-4-9',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 10,
        seatID: 'a-4-10',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 4,
        seat: 11,
        seatID:'a-4-11',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 12,
        seatID: 'a-4-12',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 13,
        seatID: 'a-4-13',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 14,
        seatID: 'a-4-14',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 15,
        seatID: 'a-4-15',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 4,
        seat: 16,
        seatID: 'a-4-16',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 4,
        seat: 17,
        seatID: 'a-4-17',
        price: PRICE3,
        isAvailable: true
    },
    /***** auditorium row 5 ***************************/  
    {
        section: auditorium,
        row: 5,
        seat: 1,
        seatID: 'a-5-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 2,
        seatID: 'a-5-2',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 3,
        seatID: 'a-5-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 4,
        seatID: 'a-5-4',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 5,
        seatID: 'a-5-5',
        price: PRICE2,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 5,
        seat: 6,
        seatID: 'a-5-6',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 7,
        seatID: 'a-5-7',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 8,
        seatID: 'a-5-8',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 9,
        seatID: 'a-5-9',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 10,
        seatID: 'a-5-10',
        price: PRICE2,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 5,
        seat: 11,
        seatID: 'a-5-11',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 12,
        seatID: 'a-5-12',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 13,
        seatID: 'a-5-13',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 14,
        seatID: 'a-5-14',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 15,
        seatID: 'a-5-15',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 5,
        seat: 16,
        seatID: 'a-5-16',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 5,
        seat: 17,
        seatID: 'a-5-17',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 5,
        seat: 18,
        seatID: 'a-5-18',
        price: PRICE3,
        isAvailable: true
    },
    /***** auditorium row 6 ***************************/  
    {
        section: auditorium,
        row: 6,
        seat: 1,
        seatID: 'a-6-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 2,
        seatID: 'a-6-2',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 3,
        seatID: 'a-6-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 4,
        seatID: 'a-6-4',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 5,
        seatID: 'a-6-5',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 6,
        seat: 6,
        seatID: 'a-6-6',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 7,
        seatID: 'a-6-7',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 8,
        seatID: 'a-6-8',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 9,
        seatID: 'a-6-9',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 10,
        seatID: 'a-6-10',
        price: PRICE2,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 6,
        seat: 11,
        seatID: 'a-6-11',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 12,
        seatID: 'a-6-12',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 13,
        seatID: 'a-6-13',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 14,
        seatID: 'a-6-14',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 15,
        seatID: 'a-6-15',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 16,
        seatID: 'a-6-16',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 6,
        seat: 17,
        seatID: 'a-6-17',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 6,
        seat: 18,
        seatID: 'a-6-18',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 6,
        seat: 19,
        seatID: 'a-6-19',
        price: PRICE3,
        isAvailable: true
    },  
    /***** auditorium row 7 ***************************/  
    {
        section: auditorium,
        row: 7,
        seat: 1,
        seatID: 'a-7-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 2,
        seatID: 'a-7-2',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 3,
        seatID: 'a-7-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 4,
        seatID: 'a-7-4',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 5,
        seatID: 'a-7-5',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 7,
        seat: 6,
        seatID: 'a-7-6',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 7,
        seatID: 'a-7-7',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 8,
        seatID: 'a-7-8',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 9,
        seatID: 'a-7-9',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 10,
        seatID: 'a-7-10',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 7,
        seat: 11,
        seatID: 'a-7-11',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 12,
        seatID: 'a-7-12',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 13,
        seatID: 'a-7-13',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 14,
        seatID: 'a-7-14',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 15,
        seatID: 'a-7-15',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 16,
        seatID: 'a-7-16',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 7,
        seat: 17,
        seatID: 'a-7-17',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 7,
        seat: 18,
        seatID: 'a-7-18',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 19,
        seatID: 'a-7-19',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 7,
        seat: 20,
        seatID: 'a-7-20',
        price: PRICE3,
        isAvailable: true
    },
    /***** auditorium row 8 ***************************/  
    {
        section: auditorium,
        row: 8,
        seat: 1,
        seatID: 'a-8-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 2,
        seatID: 'a-8-2',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 3,
        seatID: 'a-8-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 4,
        seatID: 'a-8-4',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 5,
        seatID: 'a-8-5',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 8,
        seat: 6,
        seatID: 'a-8-6',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 7,
        seatID: 'a-8-7',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 8,
        seatID: 'a-8-8',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 9,
        seatID: 'a-8-9',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 10,
        seatID: 'a-8-10',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 8,
        seat: 11,
        seatID: 'a-8-11',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 12,
        seatID: 'a-8-12',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 13,
        seatID: 'a-8-13',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 14,
        seatID: 'a-8-14',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 15,
        seatID: 'a-8-15',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 16,
        seatID: 'a-8-16',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 17,
        seatID: 'a-8-17',
        price: PRICE3,
        isAvailable: true
    },  
    {
        section: auditorium,
        row: 8,
        seat: 18,
        seatID: 'a-8-18',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 19,
        seatID: 'a-8-19',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: auditorium,
        row: 8,
        seat: 20,
        seatID: 'a-8-20',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: auditorium,
        row: 8,
        seat: 21,
        seatID: 'a-8-21',
        price: PRICE3,
        isAvailable: true
    }, 
    /***** Balcony Mid ***************************/  
    {
        section: balconyMid,
        row: 1,
        seat: 1,
        seatID: 'bm-1-1',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 2,
        seatID: 'bm-1-2',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 3,
        seatID: 'bm-1-3',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 4,
        seatID: 'bm-1-4',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 5,
        seatID: 'bm-1-5',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: balconyMid,
        row: 1,
        seat: 6,
        seatID: 'bm-1-6',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 7,
        seatID: 'bm-1-7',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 8,
        seatID: 'bm-1-8',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 9,
        seatID: 'bm-1-9',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 10,
        seatID: 'bm-1-10',
        price: PRICE1,
        isAvailable: true
    },  
    {
        section: balconyMid,
        row: 1,
        seat: 11,
        seatID: 'bm-1-11',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 12,
        seatID: 'bm-1-12',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 13,
        seatID: 'bm-1-13',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 14,
        seatID: 'bm-1-14',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 15,
        seatID: 'bm-1-15',
        price: PRICE1,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 1,
        seat: 16,
        seatID: 'bm-1-16',
        price: PRICE1,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 1,
        seat: 17,
        seatID: 'bm-1-17',
        price: PRICE2,
        isAvailable: true
    },  
    {
        section: balconyMid,
        row: 1,
        seat: 18,
        seatID: 'bm-1-18',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 1,
        seatID: 'bm-2-1',
        price: PRICE4,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 2,
        seatID: 'bm-2-2',
        price: PRICE4,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 3,
        seatID: 'bm-2-3',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 4,
        seatID: 'bm-2-4',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 5,
        seatID: 'bm-2-5',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 6,
        seatID: 'bm-2-6',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 7,
        seatID: 'bm-2-7',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 8,
        seatID: 'bm-2-8',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 9,
        seatID: 'bm-2-9',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 10,
        seatID: 'bm-2-10',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 11,
        seatID: 'bm-2-11',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 12,
        seatID: 'bm-2-12',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 13,
        seatID: 'bm-2-13',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 14,
        seatID: 'bm-2-14',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 15,
        seatID: 'bm-2-15',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 16,
        seatID: 'bm-2-16',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 17,
        seatID: 'bm-2-17',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: balconyMid,
        row: 2,
        seat: 18,
        seatID: 'bm-2-18',
        price: PRICE4,
        isAvailable: true
    },
    {
        section: balconyMid,
        row: 2,
        seat: 19,
        seatID: 'bm-2-19',
        price: PRICE4,
        isAvailable: true
    }, 
    /***** Balcony Left ***************************/  
    {
        section: balconyLeft,
        row: 1,
        seat: 1,
        seatID: 'bl-1-1',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyLeft,
        row: 1,
        seat: 2,
        seatID: 'bl-1-2',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyLeft,
        row: 1,
        seatID: 'bl-1-3',
        seat: 3,
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyLeft,
        row: 1,
        seat: 4,
        seatID: 'bl-1-4',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyLeft,
        row: 2,
        seat: 1,
        seatID: 'bl-2-1',       
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyLeft,
        row: 2,
        seat: 2,
        seatID: 'bl-2-2',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: balconyLeft,
        row: 2,
        seat: 3,
        seatID: 'bl-2-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: balconyLeft,
        row: 2,
        seat: 4,
        seatID: 'bl-2-4',
        price: PRICE4,
        isAvailable: true
    },
    /***** Balcony Right ***************************/  
    {
        section: balconyRight,
        row: 1,
        seat: 1,
        seatID: 'br-1-1',
        price: PRICE2,
        isAvailable: true
    }, 
    {
        section: balconyRight,
        row: 1,
        seat: 2,
        seatID: 'br-1-2',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyRight,
        row: 1,
        seat: 3,
        seatID: 'br-1-3',
        price: PRICE2,
        isAvailable: true
    },
    {
        section: balconyRight,
        row: 1,
        seat: 4,
        seatID: 'br-1-4',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyRight,
        row: 2,
        seat: 1,
        seatID: 'br-2-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyRight,
        row: 2,
        seat: 2,
        seatID: 'br-2-2',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyRight,
        row: 2,
        seat: 3,
        seatID: 'br-2-3',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: balconyRight,
        row: 2,
        seat: 4,
        seatID: 'br-2-4',
        price: PRICE4,
        isAvailable: true
    }, 
    /***** Box Left 1 ***************************/  
    {
        section: boxLeft1,
        row: 1,
        seat: 1,
        seatID: 'bxl1-1-1',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxLeft1,
        row: 1,
        seat: 2,
        seatID: 'bxl1-1-2',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxLeft1,
        row: 1,
        seat: 3,
        seatID: 'bxl1-1-3',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: boxLeft1,
        row: 2,
        seat: 1,
        seatID: 'bxl1-2-1',
        price: PRICE4,
        isAvailable: true
    },   
    {
        section: boxLeft1,
        row: 2,
        seat: 2,
        seatID: 'bxl1-2-2',
        price: PRICE4,
        isAvailable: true
    },
    {
        section: boxLeft1,
        row: 2,
        seat: 3,
        seatID: 'bxl1-2-3',
        price: PRICE4,
        isAvailable: true
    }, 
    /***** Box Right 1 ***************************/  
    {
        section: boxRight1,
        row: 1,
        seat: 1,
        seatID: 'bxr1-1-1',
        price: PRICE3,
        isAvailable: true
    },     
    {
        section: boxRight1,
        row: 1,
        seat: 2,
        seatID: 'bxr1-1-2',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxRight1,
        row: 1,
        seat: 3,
        seatID: 'bxr1-1-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxRight1,
        row: 2,
        seat: 1,
        seatID: 'bxr1-2-1',
        price: PRICE4,
        isAvailable: true
    }, 
    {
        section: boxRight1,
        row: 2,
        seat: 2,
        seatID: 'bxr1-2-2',
        price: PRICE4,
        isAvailable: true
    }, 
    {
        section: boxRight1,
        row: 2,
        seat: 3,
        seatID: 'bxr1-2-3',
        price: PRICE4,
        isAvailable: true
    }, 
    /***** Box Left 2 ***************************/  
    {
        section: boxLeft2,
        row: 1,
        seat: 1,
        seatID: 'bxl2-1-1',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxLeft2,
        row: 1,
        seat: 2,
        seatID: 'bxl2-1-2',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxLeft2,
        row: 1,
        seat: 3,
        seatID: 'bxl2-1-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxLeft2,
        row: 2,
        seat: 1,
        seatID: 'bxl2-2-1',
        price: PRICE4,
        isAvailable: true
    },
    {
        section: boxLeft2,
        row: 2,
        seat: 2,
        seatID: 'bxl2-2-2',
        price: PRICE4,
        isAvailable: true
    },
    {
        section: boxLeft2,
        row: 2,
        seat: 3,
        seatID: 'bxl2-2-3',
        price: PRICE4,
        isAvailable: true
    }, 
    /***** Box Right 2 ***************************/  
    {
        section: boxRight2,
        row: 1,
        seat: 1,
        seatID: 'bxr2-1-1',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: boxRight2,
        row: 1,
        seat: 2,
        seatID: 'bxr2-1-2',
        price: PRICE3,
        isAvailable: true
    },
    {
        section: boxRight2,
        row: 1,
        seat: 3,
        seatID: 'bxr2-1-3',
        price: PRICE3,
        isAvailable: true
    }, 
    {
        section: boxRight2,
        row: 2,
        seat: 1,
        seatID: 'bxr2-2-1',
        price: PRICE4,
        isAvailable: true
    },
    {
        section: boxRight2,
        row: 2,
        seat: 2,
        seatID: 'bxr2-2-2',
        price: PRICE4,
        isAvailable: true
    },  
    {
        section: boxRight2,
        row: 2,
        seat: 3,
        seatID: 'bxr2-2-3',
        price: PRICE4,
        isAvailable: true
    },                                            
]

