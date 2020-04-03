function solution(D) {
    // console.log('ermia');
    var results = [];
    var keysList = Object.keys(D); // get list keys
    var listInitSize = keysList.length;
    // console.log(listInitSize);
    keysList.forEach(function (element, index) {
        if (index < listInitSize - 1) {
            var startDate = new Date(element);
            var nextDate = new Date(keysList[index + 1]);
            var diffTime = Math.abs(nextDate.getTime() - startDate.getTime());
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            console.log('dyas --- > ' + diffDays);
            if (diffDays > 1) {
                var avgValue = ((D[keysList[index + 1]] - D[element]) / diffDays);
                console.log('each cell to add ' + avgValue);
                for (var loop = 0; loop < diffDays; loop++) {
                    var tempDate = new Date();
                    tempDate.setDate(startDate.getDate() + loop);
                    console.log('tempDate' + tempDate);
                    var year = tempDate.getFullYear();
                    var monthInt = tempDate.getMonth() + 1;
                    var dayInt = tempDate.getDate();
                    if (monthInt < 10)
                        var month = '0' + monthInt;
                    else
                        var month = monthInt.toString();
                    if (dayInt < 10)
                        var day = '0' + dayInt;
                    else
                        var day = dayInt.toString();
                    results[year + '-' + month + '-' + day] = D[element] + avgValue * loop;
                }
            }
            else {
                results[element] = D[element];
            }
        }
        else {
            results[element] = D[element];
        }
    });
    return results;
}
var test1 = { "2019-01-01": 100, "2019-01-04": 115 };
var test2 = { "2019-01-10": 10, "2019-01-11": 20, "2019-01-12": 15, "2019-01-13": 10 };
var test3 = { "2019-01-10": 10, "2019-01-11": 20, "2019-01-13": 10 };
console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
