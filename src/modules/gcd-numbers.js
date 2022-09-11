/* eslint-disable */
export function gcd(num1, num2) {
  let a = Math.abs(num1);
  let b = Math.abs(num2);

  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
}
