const standard = require('../standard');
const PREDEFINED = require('../pre-defined');

const findDay = moment => {
    const {year, month, date, hour} = standard(moment);
    const time = new Date([year, month, date].join('-'));
    const start = time.getTime();
    const end = start + PREDEFINED.DAY - 1;
    return {
        start,
        end
    }
}

module.exports = {
    findDay
}