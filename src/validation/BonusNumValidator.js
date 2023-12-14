import CustomError from '../exception/CustomError';
import { ERROR_MESSAGE } from '../constants/error';
import { NUM_LOTTO } from '../constants/number';
import { REGEX_NUM } from '../constants/regex';

class BonusNumValidator {
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
  /**
  * 숫자가 1과 45사인지 확인하는 메서드
  * @param {number[]} numArr
  */
  static isUnique(totalLotto)  {
    const uniqueSet = new Set(totalLotto);
    if(totalLotto.length !== uniqueSet.size) throw new CustomError(ERROR_MESSAGE.shouldBeUnique)
  }

  static validateBonusNum(numbers, bonusNum) {
    this.isNumber(bonusNum);
    this.isNumInRange(bonusNum);
    const totalLotto = [...numbers, Number(bonusNum)];
    this.isUnique(totalLotto);
  }
}

export default BonusNumValidator;