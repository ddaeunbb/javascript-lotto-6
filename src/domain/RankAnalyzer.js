import BuyingMoneyValidator from '../validation/BuyingMoneyValidator';

class RankAnalyzer {
  #buyingMoney

  constructor(money) {
    BuyingMoneyValidator.validateBuyingMoney(money);
    this.#buyingMoney = money;
  }
}

export default RankAnalyzer;