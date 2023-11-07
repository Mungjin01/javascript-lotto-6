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
  

async function getWinningNumbers() {
  const winningNumbers = (await Console.readLineAsync('당첨 번호를 입력해 주세요 (쉼표로 구분된 6개의 숫자): ')).split(',').map(Number);
  return winningNumbers;
}

async function getBonusNumber() {
  const bonusNumber = parseInt(await Console.readLineAsync('보너스 번호를 입력해 주세요: '));
  return bonusNumber;
}

export { getPurchaseAmount, getWinningNumbers, getBonusNumber };
