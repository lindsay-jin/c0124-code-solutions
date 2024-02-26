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

    let object = {
      total: total += i,
      odds: odds.push(i),
      evens: evens.push(i),
      range: range.push(i),
      average: total/range.length,
    };

    return(object);

  };

}
