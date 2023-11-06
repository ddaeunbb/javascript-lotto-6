/* eslint-disable lines-between-class-members */
import { Console } from '@woowacourse/mission-utils'
import { REGEX_NUM } from '../constants/regex'
import { ERR_MESSAGE } from '../constants/message'
import { LOTTO_VAL } from '../constants/constant'

class PlayerLottoAmount{
  #lottoAmount
  #totalMoney

  constructor(){
    this.#lottoAmount = 0;
    this.#totalMoney = 0;
  }

  #isNumber(str){
    if(!REGEX_NUM.test(str)) throw new Error(ERR_MESSAGE.isNotNum);
  }

  #isDividedThousand(str){
    const check = Number(str) % LOTTO_VAL === 0;
    if(!check) throw new Error(ERR_MESSAGE.isNotDivedThousand);
  }

  validate(str){
    this.#isNumber(str);
    this.#isDividedThousand(str);
  }
}

export default PlayerLottoAmount