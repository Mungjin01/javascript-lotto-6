import getPurchaseAmount from './getPurchaseAmount.js';
import getWinningNumbers from './getWinningNumbers.js';
import getBonusNumber from './getBonusNumber.js';

import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await getPurchaseAmount();
    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber();

  }
}

export default App;
