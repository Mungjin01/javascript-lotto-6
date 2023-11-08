import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

async function getWinningNumbers() {
  const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  const winningNumbers = input.split(',').map(Number);

  try {
    const lotto = new Lotto(winningNumbers);
    return lotto.getNumbers();
  } catch (error) {
    console.error(error.message);
    return null; 
  }
}

export default getWinningNumbers;
