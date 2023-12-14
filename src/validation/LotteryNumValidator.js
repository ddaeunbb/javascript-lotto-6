import CustomError from '../exception/CustomError';
import { NUM, NUM_LOTTO } from '../constants/number';
import { ERROR_MESSAGE } from '../constants/error';
import { REGEX_NUM } from '../constants/regex';

class LotteryNumValidator {
  /**
  * 입력의 개수가 6개인지 확인하는 메서드
  * @param {string[]} numArr
  */
  static isLenSix(numArr) {
    if(numArr.length !== NUM.six) throw new CustomError(ERROR_MESSAGE.shouldBeLenSix);
  }
  /**
  * 각 숫자가 유일한지 확인하는 메서드
  * @param {string[]} numArr
  */
  static isUnique(numArr) {
    const uniqueSet = new Set(numArr);
    if(numArr.length !== uniqueSet.size) throw new CustomError(ERROR_MESSAGE.shouldBeUnique)
  }
  /**
  * 입력값이 숫자인지 확인하는 메서드
  * @param {string} num
  */
  static isNumber(num) {
    if(!REGEX_NUM.test(num)) throw new CustomError(ERROR_MESSAGE.shouldBeNumber);
  }
  /**
  * 숫자가 1과 45사인지 확인하는 메서드
  * @param {string} num
  */
  static isNumInRange(num) {
    const { start, end } = NUM_LOTTO;
    const number = Number(num);
    if(!(number >= start && number <= end)) throw new CustomError(ERROR_MESSAGE.shouldInNumRange);
  }

  static validateLotterNum(numArr) {
    this.isLenSix(numArr);
    this.isUnique(numArr);
    numArr.forEach(num => {
      this.isNumber(num);
      this.isNumInRange(num);
    })
  }
}

export default LotteryNumValidator;