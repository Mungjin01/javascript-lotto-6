import { Console } from '@woowacourse/mission-utils';

async function getWinningNumbers() {
  const winningNumbers = (await Console.readLineAsync('당첨 번호를 입력해 주세요 (쉼표로 구분된 6개의 숫자): ')).split(',').map(Number);
  return winningNumbers;
}

export default getWinningNumbers;
