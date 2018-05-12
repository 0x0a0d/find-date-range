const standard = require('../standard');

const findMonth = moment => {
    const {year, month} = standard(moment);
    const start = new Date([year, month, 1].join('-')).getTime();
    const end = new Date(month === 12 ? [year+ 1, 1, 1].join('-') : [year, month + 1, 1].join('-')).getTime() - 1;
    return {
        start,
        end
    }
}

module.exports = {
    findMonth
}