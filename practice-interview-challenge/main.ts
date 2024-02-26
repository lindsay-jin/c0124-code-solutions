function getRangeReport(start: number,end: number): any {
  let total = 0;
  let odds: number[] = [];
  let evens: number[] = [];
  let range: number[] = [];

  for(let i=start; i<=end; i++){
    total += i;

    if(i % 2 !== 0){
      odds.push(i)
    };

    if(i % 2 === 0){
      evens.push(i);
    };

    range.push(i);
  };

  let object = {
  total: ,
  odds: ,
  evens: ,
  range: ,
  average: total / range.length,
};
return object;

}
