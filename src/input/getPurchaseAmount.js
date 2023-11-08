import { Console } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  let purchaseAmount;

  while (true) {
    const input = await Console.readLineAsync('구입 금액을 입력해 주세요: ');

    if (!input.trim()) {
      console.log("[ERROR] 입력값이 공백입니다. 다시 입력해 주세요.");
      continue;
    }

    purchaseAmount = parseInt(input);

    if (isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
      console.log("[ERROR] 1000원 단위로 입력해 주세요. 다시 입력해 주세요.");
      continue;
    }

    break;
  }

  return purchaseAmount;
}

export default getPurchaseAmount;
