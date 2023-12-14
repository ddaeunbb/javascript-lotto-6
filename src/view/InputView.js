import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

const InputView = Object.freeze({
  async readBuyingMoney() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.readBuyingMoney);
    return input;
  }
});

export default InputView;