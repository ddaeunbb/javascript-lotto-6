import { Console } from '@woowacourse/mission-utils';
import { UNIT } from '../constants/string';
import { OUTPUT_MESSAGE } from '../constants/message';

const OutputView = Object.freeze({
  printTotalLottoCount(count) {
    Console.print(`${count}${OUTPUT_MESSAGE.printTotalLottoCount}`)
  },

  printIssuedLotto(lotto) {
    Console.print(`[${lotto}]`)
  },

  printLotteryResult(totalMatchLotto) {
    const { first, second, third, fourth, fifth } = totalMatchLotto;
    Console.print(OUTPUT_MESSAGE.printTotalNotice);
    Console.print(`${OUTPUT_MESSAGE.printFifth}${fifth}${UNIT.count}`);
    Console.print(`${OUTPUT_MESSAGE.printFourth}${fourth}${UNIT.count}`);
    Console.print(`${OUTPUT_MESSAGE.printThird}${third}${UNIT.count}`);
    Console.print(`${OUTPUT_MESSAGE.printSecond}${second}${UNIT.count}`);
    Console.print(`${OUTPUT_MESSAGE.printFirst}${first}${UNIT.count}`);
  },

  printTotalProfit(totalProfit){
    Console.print(`${OUTPUT_MESSAGE.printTotal}${totalProfit}${OUTPUT_MESSAGE.printProfit}`)
  }
});

export default OutputView;