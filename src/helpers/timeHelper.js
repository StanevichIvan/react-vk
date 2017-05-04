/**
 * Conver unix time to view string
 * @param unixTime
 * @returns {string}
 */
const timeOffsetFromNow = function (unixTime) {
    let timeOffset = Date.now() - (unixTime * 1000);
    let minutesOffset = (timeOffset / (1000 * 60)).toFixed(0);

    if (minutesOffset > 60 * 24) {
        return (minutesOffset / (60 * 24)).toFixed(0) + ' d';
    }
    if (minutesOffset > 60) {
        return (minutesOffset / (60)).toFixed(0) + ' h';
    }

    return minutesOffset + ' min';
};

export default timeOffsetFromNow;