/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createSeats.js":
/*!****************************!*\
  !*** ./src/createSeats.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSeats\": () => (/* binding */ createSeats)\n/* harmony export */ });\nconst createSeats = () => {\n\n    const auditorium = seats.filter(seat => seat.section === 'auditorium'),  \n        balconyMid = seats.filter(seat => seat.section === 'balconyMid'),\n        balconyLeft = seats.filter(seat => seat.section === 'balconyLeft'),\n        balconyRight = seats.filter(seat => seat.section === 'balconyRight'),\n        boxLeft1 = seats.filter(seat => seat.section === 'boxLeft1'),\n        boxLeft2 = seats.filter(seat => seat.section === 'boxLeft2'),\n        boxRight1 = seats.filter(seat => seat.section === 'boxRight1'),\n        boxRight2 = seats.filter(seat => seat.section === 'boxRight2');\n\n    let row = \"<div class='row'></div>\";\n    let row2 = \"<div class='row2'></div>\";\n    \n    /*** Create Auditorium's seats *************************/\n  \n    auditorium.map((seat, i) => {  \n        if(i===14 || i===29 || i===45 || i===62 || i===80 || i===99 || i===119) auditorium.push(row);   \n\n        let _seat = `<div id='${seat.seatID}' \n                data-section='${seat.section}'\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        auditorium.push(_seat); \n    });\n    window.onload = function() {console.log(document.getElementById('#auditorium-panel'))}\n    //document.getElementById('#auditorium-panel').append(auditoriumSeats)\n    $('#auditorium-panel').html(auditorium);\n    \n   /*** Create Balcony's seats ***************************/ \n    balconyMid.map((seat, i) => {  \n        if(i===18) balconyMid.push(row);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        balconyMid.push(seat); \n    });\n    // document.querySelector('#balcony-mid').innerHTML(balconyMid)\n    $('#balcony-mid').html(balconyMid);\n\n    balconyLeft.map((seat, i) => {  \n        if(i===4) balconyLeft.push(row);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        balconyLeft.push(seat); \n    });\n    // document.querySelector('#balcony-left').innerHTML(balconyLeft)\n    $('#balcony-left').html(balconyLeft);\n    \n    balconyRight.map((seat, i) => {  \n        if(i===4) balconyRight.push(row);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        balconyRight.push(seat); \n    });\n    // document.querySelector('#balcony-right').innerHTML(balconyRight)\n    $('#balcony-right').html(balconyRight);\n\n\n   /*** Create Left Boxes seats ***************************/\n    boxLeft1.map((seat, i) => {  \n        if(i===3) boxLeft1.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxLeft1.push(seat); \n    });\n    // document.querySelector('#box-left1').innerHTML(boxLeft1)\n    $('#box-left1').html(boxLeft1);\n    \n    boxLeft2.map((seat, i) => {  \n        if(i===3) boxLeft2.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxLeft2.push(seat); \n    });\n    // document.querySelector('#box-left2').innerHTML(boxLeft2)\n    $('#box-left2').html(boxLeft2);\n   \n    /*** Create Right Boxes seats ***************************/\n    boxRight1.map((seat, i) => {  \n        if(i===3) boxRight1.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxRight1.push(seat); \n    });\n    // document.querySelector('#box-right1').innerHTML(boxRight1)\n    $('#box-right1').html(boxRight1);\n\n    boxRight2.map((seat, i) => {  \n        if(i===3) boxRight2.push(row2);   \n\n        seat = `<div id=${seat.seatID}\n                data-section=${seat.section}\n                data-price=${seat.price}\n                class='seat'>\n                ${seat.seat}\n            </div>`;\n        boxRight2.push(seat); \n    });\n\n    $('#box-right2').html(boxRight2);\n    // document.querySelector('#box-right2').innerHTML(boxRight2)\n   \n};\n\n\n\n//# sourceURL=webpack://seat-reservation/./src/createSeats.js?");

/***/ }),

/***/ "./src/findSeats.js":
/*!**************************!*\
  !*** ./src/findSeats.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findTheBestAvailableSeats\": () => (/* binding */ findTheBestAvailableSeats)\n/* harmony export */ });\nconst findTheBestAvailableSeats = (numPersons) => {\n    let theBestAvailableSeats = [],\n        side = '',\n        availableSeats = createCollections(seats, numPersons);\n\n    if (!availableSeats || availableSeats.length <= 0){\n        console.log(\"No seats found! Input less persons or less number of reserved seats!\");\n        createMessage(null);\n        return;\n    }\n\n    availableSeats.sort((a, b) => {return b.price - a.price});\n    \n    let rowOfAvailableSeats = createRow(availableSeats);\n    console.log(rowOfAvailableSeats[0].collection);\n\n    if (rowOfAvailableSeats.length < 2){\n        if (rowOfAvailableSeats[0].collection.length > numPersons){\n        \n            side = findSide(rowOfAvailableSeats[0].collection);\n\n            console.log(side);\n            \n            theBestAvailableSeats = formatSeats(rowOfAvailableSeats[0].collection, numPersons, side);\n            \n            console.log(theBestAvailableSeats);\n    \n            createMessage(theBestAvailableSeats); \n        \n            return theBestAvailableSeats; \n        }\n\n        theBestAvailableSeats = rowOfAvailableSeats[0].collection;   \n    \n        console.log(theBestAvailableSeats);\n    \n        createMessage(theBestAvailableSeats); \n    \n        return theBestAvailableSeats;\n    } \n\n    if (rowOfAvailableSeats.length >= 1) {  \n        let sideOfSeats = {};\n\n        sideOfSeats = rowOfAvailableSeats.reduce((acc, seats) => {\n            side = findSide(seats.collection, numPersons);\n            console.log(side);\n\n            if (side === \"center\") {\n                acc.center.push(seats); \n            }\n            if (side === \"left\") {\n                acc.left.push(seats); \n            }\n            if (side === \"right\") {\n                acc.right.push(seats); \n            }\n\n            return acc;\n        },{center:[], left:[], right:[]});\n\n        console.log(sideOfSeats);    \n\n        if(sideOfSeats.center.length > 0){\n            theBestAvailableSeats = formatSeats(sideOfSeats.center[0].collection, numPersons, \"center\");\n            \n            console.log(theBestAvailableSeats);\n        \n            createMessage(theBestAvailableSeats); \n        \n            return theBestAvailableSeats;\n        } \n              \n        if (sideOfSeats.right.length > 1){\n            theBestAvailableSeats = formatSeats(sideOfSeats.right[0].collection, numPersons, \"right\"); \n               \n        } else if (sideOfSeats.left.length > 1){\n            theBestAvailableSeats = formatSeats(sideOfSeats.left[sideOfSeats.left.length - 1].collection, numPersons, \"left\");    \n        \n        } else if (sideOfSeats.right[0].collection.length > sideOfSeats.left[0].collection.length){\n            theBestAvailableSeats = formatSeats(sideOfSeats.right[0].collection, numPersons, \"right\"); \n        } else if (sideOfSeats.right[0].collection.length < sideOfSeats.left[0].collection.length) {\n            theBestAvailableSeats = formatSeats(sideOfSeats.left[0].collection, numPersons, \"left\"); \n        } \n\n        console.log(theBestAvailableSeats);\n        \n        createMessage(theBestAvailableSeats); \n    \n        return theBestAvailableSeats;   \n    }\n}\n\nconst createRow = (availableSeats) => {\n    let startRow = availableSeats[0].row,\n        startSection = availableSeats[0].section,\n        rowOfAvailableSeats = [];\n\n    for (let i = 0; i < availableSeats.length; i++){\n        if (availableSeats[i].row === startRow &&\n            availableSeats[i].section === startSection) {\n\n            rowOfAvailableSeats.push(availableSeats[i]);\n        } \n    } \n    \n    return rowOfAvailableSeats;\n}\n\nconst formatSeats = (theBestAvailableSeats, numPersons, side) => {\n    const lengthOfTheBestAvailableSeats = theBestAvailableSeats.length,\n        cutNum = theBestAvailableSeats.length - numPersons,\n        halfCutNum = Math.floor(cutNum/2);\n\n    if (side === 'center') {\n        theBestAvailableSeats = theBestAvailableSeats.slice(halfCutNum, lengthOfTheBestAvailableSeats - halfCutNum);\n        if (cutNum % 2 !== 0) {\n            return theBestAvailableSeats.slice(1, theBestAvailableSeats.length);\n        }\n\n        return theBestAvailableSeats;\n    }\n\n    if (side === 'left') {\n        return theBestAvailableSeats.slice(cutNum, lengthOfTheBestAvailableSeats);                        \n    }    \n\n    if (side === 'right') {\n        return theBestAvailableSeats.slice(0, lengthOfTheBestAvailableSeats-cutNum); \n    }\n\n    return theBestAvailableSeats;\n}\n\nconst findSide = (theBestAvailableSeats, numPersons) => {\n    const rowOfTheBestAvailableSeats = theBestAvailableSeats[0].row;\n    const sectionOfTheBestAvailableSeats = theBestAvailableSeats[0].section;\n    const lengthOfTheBestAvailableSeats = theBestAvailableSeats.length;   \n\n    if (sectionOfTheBestAvailableSeats === 'auditorium' ||\n        sectionOfTheBestAvailableSeats === 'balconyMid'){\n        const row = seats.reduce((accum, seat) => { \n            if (seat.section === 'auditorium' && seat.row === rowOfTheBestAvailableSeats) accum.push(seat);                            \n            return accum;\n        \n        }, []); \n\n        let lastSeats = row[row.length - 1].seat - theBestAvailableSeats[lengthOfTheBestAvailableSeats - 1].seat;\n        let firstSeats = theBestAvailableSeats[0].seat - row[0].seat;\n\n        if (firstSeats - lastSeats > 2) return \"right\";\n        \n        if (lastSeats - firstSeats > 2)  return \"left\";\n        \n        if (lastSeats === firstSeats)  return \"center\";\n                \n        return \"center\";                    \n    }     \n}\n\nconst createCollections = (seats, numPersons) => {\n    let collection = [],\n        collections = [],\n        numSeat =0, section, row, price;\n\n    for (let seat of seats){\n\n        if (seat.isAvailable){\n            if (collection && collection.length > 0){\n                if(seat.section === section && seat.row === row && seat.price === price && seat.seat - numSeat === 1){\n                    collection.push(seat);\n                    numSeat = seat.seat;\n                } else {\n                    if (collection.length >= numPersons){\n                        collections.push({price: collection[0].price, section: collection[0].section, row: collection[0].row, collection })\n                        collection = [];\n                        numSeat = 0;               \n                    }\n                    collection = [];\n                    numSeat = 0;\n\n                    collection.push(seat);\n                    section = seat.section;\n                    row = seat.row;\n                    price = seat.price;\n                    numSeat = seat.seat; \n\n                }                \n            }else{\n                collection.push(seat);\n                section = seat.section;\n                row = seat.row;\n                price = seat.price;\n                numSeat = seat.seat; \n            }\n                        \n        } else {\n            if (collection.length >= numPersons){\n                collections.push({price: collection[0].price, section: collection[0].section, row: collection[0].row, collection })             \n            }\n            collection = [];\n            numSeat = 0;\n        }    \n    }\n\n    return collections;\n\n}\n\nconst createMessage = (found) => {\n    $(\".proces\").removeClass(\"visible\");          \n    $(\".result\").addClass(\"visible\");\n    let message = \" No seats found! Input less persons or less number of reserved seats!\";\n\n    if(!found) {\n        return $('.num').html(message); \n    }\n\n    message = found.map((seat, i) => {\n        $(`#${seat.seatID}`).addClass(\"best\");\n        return ` ${i+1}. Section: ${seat.section}, Row: ${seat.row}, Seat: ${seat.seat}, Price: ${seat.price} Ft<br>`;           \n    });\n\n    $('.num').html(message);  \n}\n\n//# sourceURL=webpack://seat-reservation/./src/findSeats.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createSeats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSeats */ \"./src/createSeats.js\");\n/* harmony import */ var _reserveSeats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reserveSeats */ \"./src/reserveSeats.js\");\n/* harmony import */ var _findSeats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findSeats */ \"./src/findSeats.js\");\n\n\n\n\n$(window).ready(function() {\n    (0,_createSeats__WEBPACK_IMPORTED_MODULE_0__.createSeats)(); \n    (0,_reserveSeats__WEBPACK_IMPORTED_MODULE_1__.reserveSeats)(0.2);      \n});\n\n$(() => { \n    const handleChange = (e) => {\n        $('.seat').removeClass(\"best\");\n        $(\"button\").removeClass(\"disable\");\n\n        let value = Number(e.target.value); \n        \n        (0,_reserveSeats__WEBPACK_IMPORTED_MODULE_1__.reserveSeats)(value);                      \n    };\n\n    $(\"#select\").on('change', handleChange);\n}); \n\n$(() => { \n    const handleChangeVisitors = (e) => {\n        e.preventDefault; \n        $('.seat').removeClass(\"best\");\n        $(\"button\").removeClass(\"disable\");\n    };\n\n    $(\"#visitors\").on('change', handleChangeVisitors);\n});\n\n$(() => { \n    const handleClick = (e) => {\n        e.preventDefault; \n        $('.seat').removeClass(\"best\");\n        $(\"button\").addClass(\"disable\");\n         \n        let value = $(\"#visitors\").val();\n\n        (0,_findSeats__WEBPACK_IMPORTED_MODULE_2__.findTheBestAvailableSeats)(value);\n    };\n\n    $(\"button\").on('click', handleClick);\n});\n\n//# sourceURL=webpack://seat-reservation/./src/index.js?");

/***/ }),

/***/ "./src/reserveSeats.js":
/*!*****************************!*\
  !*** ./src/reserveSeats.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reserveSeats\": () => (/* binding */ reserveSeats)\n/* harmony export */ });\n// Random reserve seats \n\nconst reserveSeats = (countReservedSeats) => {\n\n    if(countReservedSeats > 0.9){\n        $(\".seat\").addClass(\"unavailable\");             \n        return seats.forEach(seat => seat.isAvailable = false);\n    }\n\n    const length = seats.length,\n        unavailableLength = Math.floor(length * countReservedSeats),\n        randomSeatsIndexes = [];\n\n    while (randomSeatsIndexes.length != unavailableLength) {\n        let rendomIndex = Math.floor(Math.random() * (length-1));\n\n        if (!randomSeatsIndexes.includes(rendomIndex)) {\n            randomSeatsIndexes.push(rendomIndex);                    \n        }\n    }\n    \n    updateSeats(randomSeatsIndexes);\n}\n\nconst updateSeats = (randomIndexes) => {  \n    $(\".seat\").removeClass(\"unavailable\");\n\n    return seats = seats.map((seat, index) =>{\n        if (randomIndexes.includes(index)) {            \n            $(`#${seat.seatID}`).addClass(\"unavailable\");\n            seat.isAvailable = false;\n            return seat;\n        }\n        seat.isAvailable = true;   \n        return seat;\n    });\n}    \n\n//# sourceURL=webpack://seat-reservation/./src/reserveSeats.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;