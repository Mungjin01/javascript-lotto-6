import { Console } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  const purchaseAmount = parseInt(await Console.readLineAsync('구입 금액을 입력해 주세요: '));
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
