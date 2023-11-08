/* eslint-disable lines-between-class-members */
import { RANK, RANK_BY_COUNT, RANK_STANDARD } from '../constants/constant';

class RankCalculator {
  #totalRank;
  #totalPrizeMoney;

  constructor(){
    const { first, second, third, fourth, fifth} = RANK
    this.#totalRank = new Map([
      [fifth,0],[fourth,0],[third,0],[second,0],[first,0]
    ]);
    this.#totalPrizeMoney = 0;
  }
  
  #calculateRightNum(answerLotto, userLotto){
    let count = 0;
    userLotto.forEach(num => {
      if(answerLotto.includes(num)) count += 1;
    });
    return count;
  }

  #isBonusIncluded(answerLotto, userLotto){
    const bonusNum = [...userLotto].pop();
    return answerLotto.includes(bonusNum)
  }

  #setElseRank(count){
    const { standardOfRank } = RANK_STANDARD;
    if(count >= standardOfRank) {
      let result = this.#totalRank.get(RANK_BY_COUNT[count]);
      this.#totalRank.set(RANK_BY_COUNT[count], result += 1);
    }
  }

  #setSecondOrThirdRank(wasBonus){
    const { second, third} = RANK;
    if(wasBonus){
      let result = this.#totalRank.get(second);
      this.#totalRank.set(second, result += 1);
    }
    let result = this.#totalRank.get(third);
    this.#totalRank.set(third, result += 1);
  }

  calculateRank(userLotto, lottoMap){
    const { standardOfBonus } = RANK_STANDARD;
    lottoMap.forEach(correctLotto => {
      const count = this.#calculateRightNum(correctLotto, userLotto);
      if(count === standardOfBonus){
        let isBonusIncluded = false;
        isBonusIncluded = this.#isBonusIncluded(correctLotto, userLotto);
        this.#setSecondOrThirdRank(isBonusIncluded);
      }
      this.#setElseRank(count);
    });
  }

  getTotalRank(){
    return this.#totalRank;
  }
}

export default RankCalculator