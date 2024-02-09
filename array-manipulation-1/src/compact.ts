/* exported compact */
// function compact(array: unknown[]): unknown[]{
//   //we want to filter out keywords and return a new array without those keywords
//   let str = '';
//   //find the falsy values, find the index number, then make a new array with
//   //all elements but element with that index number.
//   for(let i=0; i<array.length; i++){
//     switch(array[i]){
//       case false:
//       case null:
//       case NaN:
//       case 0:
//       case -0:
//       case undefined:
//       case '':
//         str += array[i];
//     }
//   }
//   let arr =[];
//   for(let x=0; x<array.length; x++){
//     if(array[x] !== str){
//       arr.push(array[x])
//     }
//   } return arr;
// }

function compact(array: unknown[]): unknown {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}
