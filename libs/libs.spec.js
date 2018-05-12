const {assert} = require('chai');
const date = require('./index');

const long = 1526140394241;
const json = '2018-05-12T15:53:14.241Z';
const string = 'Sat May 12 2018 15:53:14 GMT+0000 (UTC)';
const obj = new Date(1526140394241);

const checkTime = {
    long, json, string, obj
};

describe('lib', function () {
    describe('#day', function () {
        const start = 1526083200000,
            end = 1526169599999;
        Object.keys(checkTime).forEach(name=>{
            it(`##${name}`, function () {
                const day = date.day.findDay(checkTime[name]);
                assert(start == day.start, 'Start of month must match');
                assert(end == day.end, 'End of week month match');
            })
        });
    })
    describe('#week', function () {
        const start = 1525651200000,
            end = 1526255999999;
        Object.keys(checkTime).forEach(name=>{
            it(`##${name}`, function () {
                const week = date.week.findWeek(checkTime[name]);
                assert(start == week.start, 'Start of week must match');
                assert(end == week.end, 'End of week must match');
            })
        });
    })
    describe('#month', function () {
        const start = 1525132800000,
            end = 1527811199999;
        Object.keys(checkTime).forEach(name=>{
            it(`##${name}`, function () {
                const month = date.month.findMonth(checkTime[name]);
                assert(start == month.start, 'Start of month must match');
                assert(end == month.end, 'End of week month match');
            })
        });
    })
});
