import * as fns from 'date-fns'
import * as fnsTz from 'date-fns-tz';

const UTCOfLocal = new Date(2020, 0, 1); //new Date('2020-1-1');

const newDate = new Date();
const dateNow = Date.now();
const newDateToDateString = new Date().toDateString();

const nowGetTime = new Date().getTime();
const fns_nowGetTime = fns.getTime(new Date());

const getTimezoneOffset = new Date().getTimezoneOffset()

console.log('UTCOfLocal', UTCOfLocal);

console.log('newDate', newDate);
console.log('dateNow', dateNow);

console.log('nowGetTime', nowGetTime);
console.log('fns_nowGetTime', fns_nowGetTime);

console.log('getTimezoneOffset', getTimezoneOffset);
console.log('newDateToDateString', newDateToDateString);

const fns_differenceInMinutes = fns.differenceInMinutes(newDate, new Date(newDateToDateString))

console.log('fns_differenceInMinutes', fns_differenceInMinutes);

const zonedTimeToUtc = fnsTz.zonedTimeToUtc(1608543231397, '+02:00');
console.log('zonedTimeToUtc', zonedTimeToUtc);



