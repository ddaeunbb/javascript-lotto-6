import LotteryNumValidator from '../validation/LotteryNumValidator';
import BonusNumValidator from '../validation/BonusNumValidator';
import { strElToNumEl } from '../utils/Convertor';

class Lotto {
  #numbers;

  constructor(lotteryNumArr) {
    LotteryNumValidator.validateLotteryNum(lotteryNumArr);
    this.#numbers = strElToNumEl(lotteryNumArr);
  }

  /**
  * @param {string} bonusNum
  */
  pickBonusNum(bonusNum) {
    BonusNumValidator.validateBonusNum(this.#numbers, bonusNum);
    this.#numbers.push(Number(bonusNum));
  }

  issuePrizeLotto() {
    const lotto = [...this.#numbers];
    const bonus = lotto.pop();
    return { lotto, bonus };
  }
}

export default Lotto;
