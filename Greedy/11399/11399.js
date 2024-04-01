const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let k = input[1].split(' '); // 소요되는 시간

const resultArr = [];

k.map(el => +el).sort((a, b) => a - b).reduce((acc, cur, idx, thisArr) => {
  if(idx === thisArr.length - 1) {
    resultArr.push(acc + cur);
  }
  resultArr.push(acc);
  return acc + cur;
}, 0)
let result = resultArr.reduce((acc, cur) => {
  return acc + cur
})
console.log(result);