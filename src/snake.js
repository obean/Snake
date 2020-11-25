class Snake {
  constructor(testBody, testTarget, testGridMax) {
    this.maxXCoord = testGridMax || 990
    this.maxYCoord = testGridMax || 740
    this.body = testBody || [[this.getRandomInt(1,this.maxXCoord), this.getRandomInt(1, this.maxYCoord)]]
    this.target = testTarget || [this.getRandomInt(1, this.maxXCoord), this.getRandomInt(1, this.maxYCoord)]
    //this.renderer = new SnakeRenderer
  }
  
  updateTargetSquare() {
    this.target = [this.getRandomInt(0, this.maxXCoord), this.getRandomInt(0, this.maxYCoord)]
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



  // rendering methods
  drawFood() {
    const board = document.getElementById('snakeGameCanvas');
    const boardCTX = board.getContext('2d');
    boardCTX.fillStyle = 'lightgreen';
    boardCTX.strokeStyle = 'darkgreen';
    boardCTX.fillRect(this.target[0],this.target[1], 10, 10);
    boardCTX.strokeRect(this.target[0],this.target[1], 10, 10)
  }

  drawSnake() {
    const board = document.getElementById('snakeGameCanvas')
    const boardCTX = board.getContext('2d')
    boardCTX.fillStyle = 'darkred';
    boardCTX.strokeStyle = 'yellow';
    for(let i = 0; i <= this.body.length -1; i++) {
      boardCTX.fillRect(this.body[i][0],this.body[i][1], 10, 10);
      boardCTX.strokeRect(this.body[i][0],this.body[i][1], 10, 10)
    }
  }
}