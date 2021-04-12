let bubbleSort = (arr) => {
  let switched = false;
  let end = arr.length - 1;
  let bubbleHelper = (array) => {
    switched = false;
    for (var i = 0; i < end; i++) {
      let cur = array[i];
      let sec = array[i + 1];
      if (cur > sec) {
        switched = true;
        let temp = cur;
        array[i] = sec;
        array[i + 1] = temp;
      }
    }
    end--;
  }
  while(switched) {
    bubbleHelper(arr);
  }
  return arr;
}
module.exports = bubbleSort;