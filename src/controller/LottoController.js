import OutputView from '../view/OutputView';
import DongHaengLottery from '../domain/DongHaengLottery';
import RankAnalyzer from '../domain/RankAnalyzer';
import InputView from '../view/InputView';
import { strTostrArrConvertor } from '../utils/Convertor';
import Lotto from '../domain/Lotto';

class LottoController {
  #dongHaengLottery = new DongHaengLottery();
  #lotto;
  #rankAnalyzer;

  async issueLotto() {
    const money = await InputView.readBuyingMoney();
    this.#rankAnalyzer = new RankAnalyzer(money);
    const lottoCount = Number(money) / 1000;
    OutputView.printTotalLottoCount(lottoCount);
    this.#dongHaengLottery.issueLotto(lottoCount);
  }

  async drawLottery() {
    const lotteryNum = await InputView.readLotteryNum();
    const lotteryNumArr = strTostrArrConvertor(lotteryNum);
    this.#lotto = new Lotto(lotteryNumArr);
    const bonusNum = await InputView.readBonusNum();
    this.#lotto.pickBonusNum(bonusNum);
  }
}

export default LottoController;