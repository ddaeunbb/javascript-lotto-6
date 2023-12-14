import { REGEX_NUM } from '../constants/regex';
import CustomError from '../exception/CustomError';
import { ERROR_MESSAGE } from '../constants/error';
import { NUM } from '../constants/number';
/**
 * @classdesc BuyingMoneyValidator
 * 로또를 구매한 금액을 검증한다.
 */
class BuyingMoneyValidator {
  /**
  * 입력값이 숫자인지 확인하는 메서드
  * @param {number} num
  */
  static isNumber(num) {
    if(!REGEX_NUM.test(num)) throw new CustomError(ERROR_MESSAGE.shouldBeNumber);
  }
  /**
  * 입력값이 1000의 배수인지 확인하는 메서드
  * @param {number} num
  */
  static isThousandMultiple(num) {
    if(!Number.isInteger(num / NUM.thousand)) throw new CustomError(ERROR_MESSAGE.shouldBeThousandMultiple);
  }

  static validateBuyingMoney(num) {
    // this.isNumber(num);
    this.isThousandMultiple(num);
  }
}

export default BuyingMoneyValidator;