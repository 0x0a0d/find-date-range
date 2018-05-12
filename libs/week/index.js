const standard = require('../standard');
const PREDEFINED = require('../pre-defined');

const findWeek = moment => {
    const {year, month, date} = standard(moment);
    const time = new Date([year, month, date].join('-'));
    const day = time.getUTCDay();
    const start = time.getTime() - ((day + 6) % 7) * PREDEFINED.DAY;
    const end = start + PREDEFINED.WEEK - 1;
    return {
        start,
        end
    }
}

module.exports = {
    findWeek
}