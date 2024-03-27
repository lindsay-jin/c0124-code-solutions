"use strict";
function getRangeReport(start, end) {
    let total = 0;
    let odds = [];
    let evens = [];
    let range = [];
    for (let i = start; i <= end; i++) {
        total += i;
        if (i % 2 !== 0) {
            odds.push(i);
        }
        ;
        if (i % 2 === 0) {
            evens.push(i);
        }
        ;
        range.push(i);
    }
    ;
    let object = {
        total: total,
        odds: odds,
        evens: evens,
        range: range,
        average: total / range.length,
    };
    return object;
}
