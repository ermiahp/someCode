function parseInput(D) {
  let keysList = Object.keys(D);
  for (let index = 0; index < keysList.length; index++) {
    const element = keysList[index];
    let parts = element.split("-");
    // console.log(parseInt(parts[1]));

    if(parseInt(parts[0]) < 1970)
      return false
    if(parseInt(parts[1]) > 12 || parseInt(parts[1]) < 1)
      return false
    if(parseInt(parts[2]) > 31 || parseInt(parts[2]) < 1)
      return false
    if(D[element] < 0 || D[element] > 1000000 )
      return false
  }
  return true
}

function sortData(D) {
  let result = {};
  let keysList = Object.keys(D);
  keysList.sort();
  // console.log(keysList);

  for (let index = 0; index < keysList.length; index++) {
    const element = keysList[index];
    result[element] = D[element];
  }
  return result
}

function getNormalKeys(startDate, loop) {
  let tempDate = new Date(startDate);
  tempDate.setDate(startDate.getDate() + loop);
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

  return year+ '-' + month + '-' + day;
}

function solution(D){
  try {
    if ( !parseInput(D)) throw "check inputs!";
    let data = sortData(D);
    let results = {};
    let keysList = Object.keys(data);// get list keys
    let listInitSize = keysList.length;

    keysList.forEach((element, index) => {

      if (index < listInitSize - 1) {

        let startDate = new Date(element);
        let nextDate  = new Date(keysList[index + 1]);
        const diffTime = Math.abs(nextDate.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if ( diffDays > 1){
          let avgValue = ((data[keysList[index + 1]] - data[element]) / diffDays);
          for (let loop = 0; loop < diffDays; loop++) {
            results[getNormalKeys(startDate,loop)] = data[element] + avgValue * loop;
          }
        }else{
          results[element] = data[element];
        }
      }else{
        results[element] = data[element];
      }
    });
    return results;
  } catch (error) {
    return error;
  }
}

export { solution };
