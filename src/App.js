import getPurchaseAmount from './input/getPurchaseAmount.js';
import getBonusNumber from './input/getBonusNumber.js';
import getWinningNumbers from './input/getWinningNumbers.js';
import outputPurchaseAmount from './outputPurchaseAmount.js';
import outputLottoNumbers from './outputLottoNumbers.js';

import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await getPurchaseAmount();
    outputPurchaseAmount(purchaseAmount);
    outputLottoNumbers(purchaseAmount);
    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber();

  }
}

export default App;
