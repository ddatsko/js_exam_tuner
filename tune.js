function tune(arr) {
    const perfectFrequencies = [330, 247, 196, 147, 110, 82];
    let tunings = [];
    for (let i = 0; i < 6; i++) {
        tunings.push(getStringRes(arr[i], perfectFrequencies[i]));
    }
    return tunings;
}

function getStringRes(stringFreq, properFreq) {
    // I calculated the percent as this, as assumed that it would be a better way
    // However, the code does not work the same as examples
    let res, percent = stringFreq / properFreq * 100;

    // I know, this is very ugly. But I could npt found a better way to do so as code becomes much more complicated
    if (percent === 0) res = '-';
    else if (percent <= 97) res = '>>•'; // >= 3%
    else if (percent < 100) res = '>•';  // < 3%
    else if (percent === 100) res = 'OK';  // ==
    else if (percent < 103) res = '•<';  // < 3%
    else res = '•<<';                    // >= 3%
    return res;
}