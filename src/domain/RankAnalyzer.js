import BuyingMoneyValidator from '../validation/BuyingMoneyValidator';

class RankAnalyzer {
  #buyingMoney

  constructor(money) {
    BuyingMoneyValidator.validateBuyingMoney(money);
    this.#buyingMoney = Number(money);
  }
}

export default RankAnalyzer;