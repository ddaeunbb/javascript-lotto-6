import { Random } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView';

class DongHaengLottery {
  #issuedLotto;

  issueLotto(count) {
    const lottos = Array.from({length: count})
    lottos.forEach((_, idx)=> {
      const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos[idx] = randomArr;
      OutputView.printIssuedLotto(randomArr.join(', '));
    })
    this.#issuedLotto = lottos;
  }

  calculateTotalLotto(totalLottos) {
    const result = [];
    this.#issuedLotto.forEach(lotto => {
      let count = 0;
      let bonus = false;
      lotto.forEach(num => {
        if(totalLottos.lotto.includes(num)) count +=1;
      });
      if(lotto.includes(totalLottos.bonus)) bonus = true;
      result.push({ count, bonus });
    })
    return result;
  }
}

export default DongHaengLottery;