class Snake {
  constructor(testBody, testTarget, testGridMax) {
    this.maxCoord = testGridMax || 100
    this.body = testBody || [[this.getRandomInt(1,this.maxCoord), this.getRandomInt(1, this.maxCoord)]]
    this.target = testTarget || [this.getRandomInt(1, this.maxCoord), this.getRandomInt(1, this.maxCoord)]
    
  }
  
  updateTargetSquare() {
    this.target = [this.getRandomInt(0, this.maxCoord), this.getRandomInt(0, this.maxCoord)]
    if(this.body.filter(coord => (coord[0] == this.target[0]) && (coord[1] == this.target[1]) ).length > 0) {
      this.updateTargetSquare()
    }
  }



  //below method untested, it is provided by developer.mozilla and I have used it many times before. 
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}