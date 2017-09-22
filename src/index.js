module.exports = function multiply(strNum1, strNum2) {

    let a1 = strNum1.split('').reverse();
    let a2 = strNum2.split('').reverse();
    let res = [];
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            let pos = i + j;
            if (pos >= res.length) {
                res[pos] = a1[i] * a2[j];
            }
            else {
                res[pos] = a1[i] * a2[j] + res[pos];
            }

            if (res[pos] > 9) {
                if (pos + 1 >= res.length) {
                    res[pos + 1] = Math.floor(res[pos] / 10);
                }
                else {
                    res[pos + 1] = Math.floor(res[pos] / 10) + res[pos + 1];
                }
                res[pos] -= Math.floor(res[pos] / 10) * 10;
            }
        }
    }
    return res.reverse().join("");
}
