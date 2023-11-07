import { LOTTO_RANGE } from '../constants/constant';
import { ERR_MESSAGE } from '../constants/message';
import { REGEX_NUM } from '../constants/regex';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLottoNums(numbers);
    this.#numbers = numbers;
  }

  #isLenSix(numArr){
    const result = numArr.length === LOTTO_RANGE.range;
    if(!result) throw new Error(ERR_MESSAGE.notLenSix);
  }

  #isDuplicated(numArr){
    const result = new Set(numArr).length === numArr.length;
    if(!result) throw new Error(ERR_MESSAGE.notDuplicated);
  }

  #isNumber(num){
    if(!REGEX_NUM.test(num)) throw new Error(ERR_MESSAGE.notNum);
  }

  #isUnderFourtyFive(num){
    const result = num >= 1 && num <= 45;
    if(!result) throw new Error(ERR_MESSAGE.notUnderFourtyFive);
  }

  #validateLottoNums(numArr) {
    this.#isLenSix(numArr);
    this.#isDuplicated(numArr);
    numArr.forEach(num => {
      this.#isNumber(num);
      this.#isUnderFourtyFive(num);
    })
  }

  validateBonusNum(){
    
  }
}

export default Lotto;
