const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n =  input[0].split(' ')[0]; // 동전의 개수
let k = input[0].split(' ')[1]; // 만들어야 할 금액

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));  
}

let cnt = 0;
for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / arr[i]); // 해당 동전을 몇 개 사용해야 하는지
  k %= arr[i]; // 해당 동전으로 모두 거슬러 준 뒤 남은 금액
}
console.log(cnt);
