const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.map(Number));

function sugarDelivery(N) {
  let bags = 0; // 봉지의 수를 저장할 변수

  while (N > 0) {
    if (N % 5 === 0) {
      // N이 5로 나누어 떨어지면, 5킬로그램 봉지로만 배달 가능
      bags += N / 5; // 5킬로그램 봉지의 수를 더함
      return bags; // 최종 봉지의 수를 반환
    } else {
      N -= 3; // N이 5로 나누어 떨어지지 않으면, 3킬로그램 봉지 하나를 더하고 계속 시도
      bags++;
    }
  }

  if (N < 0) {
    // 정확하게 N킬로그램을 만들 수 없는 경우
    return -1; // -1을 반환
  }

  return bags; // 최종적으로 필요한 봉지의 수를 반환
}
console.log(sugarDelivery(n));