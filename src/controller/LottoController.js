import RankAnalyzer from '../domain/RankAnalyzer';
import InputView from '../view/InputView';

class LottoController {
  #rankAnalyzer;

  async issueLotto() {
    const money = await InputView.readBuyingMoney();
    this.#rankAnalyzer = new RankAnalyzer(money);
  }
}

export default LottoController;