import { Random } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView';

class DongHaengLottery {
  #issuedLotto;

  issueLotto(count) {
    const lottos = Array.from({length: count})
    lottos.forEach((el, idx)=> {
      const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos[idx] = randomArr;
      OutputView.printIssuedLotto(randomArr.join(', '));
    })
    this.#issuedLotto = lottos;
  }
}

export default DongHaengLottery;