import LotteryNumValidator from '../validation/LotteryNumValidator';
import { strElToNumEl } from '../utils/Convertor';

class Lotto {
  #numbers;

  constructor(lotteryNumArr) {
    LotteryNumValidator.validateLotterNum(lotteryNumArr);
    this.#numbers = strElToNumEl(lotteryNumArr);
  }
}

export default Lotto;
