import BuyingMoneyValidator from '../validation/BuyingMoneyValidator';
import OutputView from '../view/OutputView';
import { REGEX_THOUSAND } from '../constants/regex';
import { SYMBOL } from '../constants/string';

class RankAnalyzer {
  #buyingMoney
  #totalMatchLotto = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0, }

  constructor(money) {
    BuyingMoneyValidator.validateBuyingMoney(money);
    this.#buyingMoney = Number(money);
  }

  calculateRankingLotto(result) {
    result.forEach(({count, bonus}) => {
      if(count === 6) this.#totalMatchLotto.first += 1;
      if(count === 5 && bonus) this.#totalMatchLotto.second += 1;
      if(count === 5) this.#totalMatchLotto.third += 1;
      if(count === 4) this.#totalMatchLotto.fourth += 1;
      if(count === 3) this.#totalMatchLotto.fifth += 1;
    })
    OutputView.printLotteryResult(this.#totalMatchLotto);
  }

  calculateProfit() {
    const { first, second, third, fourth, fifth } = this.#totalMatchLotto;
    let totalPrize = 0;
    totalPrize += first * 2000000000;
    totalPrize += second * 30000000;
    totalPrize += third * 1500000;
    totalPrize += fourth * 50000;
    totalPrize += fifth * 5000;
    const totalProfit = ((totalPrize / this.#buyingMoney) * 100).toFixed(1);
    const profitWithThousand = totalProfit.toString().replace(REGEX_THOUSAND, SYMBOL.comma);
    OutputView.printTotalProfit(profitWithThousand);
  }
}

export default RankAnalyzer;