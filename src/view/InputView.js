import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

const InputView = Object.freeze({
  async readBuyingMoney() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.readBuyingMoney);
    return input;
  },

  async readLotteryNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.readLotteryNum);
    return input;
  },
  
  async readBonusNum() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.readBonusNum);
    return input;
  }
});

export default InputView;