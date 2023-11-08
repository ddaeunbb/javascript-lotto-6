import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';
import { NUMBER_BY_RANK } from '../constants/constant';

class OutputView {
  printLineBreak(){
    Console.print('\n');
  }

  printTotalLotto(num){
    this.printLineBreak();
    Console.print(`${num}${OUTPUT_MESSAGE.lottoCount}`)
  }

  printInput(input){
    Console.print(input);
  }

  printResultPhrase(){
    this.printLineBreak();
    Console.print(OUTPUT_MESSAGE.winStatistics);
  }

  printTotalRank(rank, count){
    const order = NUMBER_BY_RANK[rank];
    Console.print(OUTPUT_MESSAGE[order] + count + OUTPUT_MESSAGE.unit);
  }
}

export default OutputView;