import { Console } from '@woowacourse/mission-utils';

async function getBonusNumber() {
  const bonusNumber = parseInt(await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));
  return bonusNumber;
}

export default getBonusNumber;
