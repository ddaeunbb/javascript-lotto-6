import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

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
}

export default OutputView;