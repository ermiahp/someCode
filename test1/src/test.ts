function solution(D) {
    // console.log('ermia');
    let results = [];
    let keysList = Object.keys(D);// get list keys
    let listInitSize = keysList.length;
    // console.log(listInitSize);
    keysList.forEach((element, index) => {
      if (index < listInitSize - 1) {
        let startDate = new Date(element);
        let nextDate  = new Date(keysList[index + 1]);
        const diffTime = Math.abs(nextDate.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log('dyas --- > ' + diffDays);
        if ( diffDays > 1){
          let avgValue = ((D[keysList[index + 1]] - D[element]) / diffDays);
          console.log('each cell to add ' + avgValue);
          for (let loop = 0; loop < diffDays; loop++) {
            let tempDate = new Date();
            tempDate.setDate(startDate.getDate() + loop);
            console.log('tempDate' + tempDate);
            let year  = tempDate.getFullYear();
            let monthInt = tempDate.getMonth() + 1;
            let dayInt   = tempDate.getDate();

            if (monthInt < 10)
                var month:string = '0' + monthInt;
            else
                var month:string = monthInt.toString();

            if (dayInt < 10)
                var day:string = '0' + dayInt;
            else
                var day:string = dayInt.toString();

            results[ year+ '-' + month + '-' + day ] = D[element] + avgValue * loop;
          }
        }else{
          results[element] = D[element];
        }
      }else{
        results[element] = D[element];
      }
    });
    return results;
}

let test1 = {"2019-01-01":100,"2019-01-04":115};
let test2 = {"2019-01-10":10,"2019-01-11":20, "2019-01-12":15,"2019-01-13":10};
let test3 = {"2019-01-10":10,"2019-01-11":20, "2019-01-13":10};
console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
