import { getPurchaseAmount, getWinningNumbers, getBonusNumber } from './input.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await getPurchaseAmount();
    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber();

  }
}

export default App;
