import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

const OutputView = Object.freeze({
  printTotalLottoCount(count) {
    Console.print(`${count}${OUTPUT_MESSAGE.printTotalLottoCount}`)
  },

  printIssuedLotto(lotto) {
    Console.print(`[${lotto}]`)
  }
});

export default OutputView;