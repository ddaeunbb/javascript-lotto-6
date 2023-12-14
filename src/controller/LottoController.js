import OutputView from '../view/OutputView';
import DongHaengLottery from '../domain/DongHaengLottery';
import RankAnalyzer from '../domain/RankAnalyzer';
import InputView from '../view/InputView';

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
}

export default LottoController;