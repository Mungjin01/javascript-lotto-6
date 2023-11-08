import { Console } from '@woowacourse/mission-utils';

async function getBonusNumber() {
  const bonusNumber = parseInt(await Console.readLineAsync('보너스 번호를 입력해 주세요: '));
  return bonusNumber;
}

export default getBonusNumber;
