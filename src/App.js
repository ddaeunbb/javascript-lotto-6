import { Console } from '@woowacourse/mission-utils';
import LottoController from './controller/LottoController';

class App {
  #controller = new LottoController();

  async play() {
    try {
      await this.#controller.issueLotto();
      await this.#controller.drawLottery();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;

const app = new App();
app.play();