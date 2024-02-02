/* exported countdown */
function countdown(number: number): number[] {
  const total = [];
  for (let i = number; i >= 0; i--) {
    total.push(i);
  }
  return total;
}
