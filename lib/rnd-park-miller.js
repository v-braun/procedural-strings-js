
const MAX = 2147483647;
class ParkMiller{
  /**
   * simple Random generator
   * code is based on this gist
   * https://gist.github.com/blixt/f17b47c62508be59987b
   * 
   * @param {number} seed - generators seed
   */
  constructor(seed){
    this.seed = seed % MAX;
    if(this.seed <= 0){
      this.seed += (MAX - 1);
    }
  }

  /**
   * returns next random int number
   * @returns  {number}
   */
  nextInt(){
    this.seed = this.seed * 16807 % MAX;
    return this.seed;
  }

  /**
   * returns next random float number
   * @returns  {number}
   */
  nextFloat(){
    const next = this.nextInt();
    return (next - 1) / (MAX - 1);
  }

  /**
   * returns next random int between min and max
   * @param {number} min
   * @param {number} max 
   */
  nextIntBetween(min, max){
    const nextF = this.nextFloatBetween(min, max);
    return Math.round(nextF);
  }

  /**
   * returns next random float between min and max
   * @param {number} min
   * @param {number} max 
   */  
  nextFloatBetween(min, max){
    const nextF = this.nextFloat();
    return min + ((max - min) * nextF);
  }

}

module.exports = ParkMiller;