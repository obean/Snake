class Snake {
  constructor(testBody, testTarget, testGridMax) {
    this.maxXCoord = testGridMax || 990
    this.maxYCoord = testGridMax || 740
    this.body = testBody || [[Math.round((this.getRandomInt(1,this.maxXCoord)/10))*10, Math.round((this.getRandomInt(1,this.maxYCoord)/10))*10]]
    this.target = testTarget || [Math.round((this.getRandomInt(1,this.maxXCoord)/10))*10, Math.round((this.getRandomInt(1,this.maxYCoord)/10))*10]
    this.xChange = 0
    this.yChange = 0
    this.gameNotOver = true
    //this.renderer = new SnakeRenderer
  }
  
  updateTargetSquare() {
    this.target = [Math.round((this.getRandomInt(1,this.maxXCoord)/10))*10, Math.round((this.getRandomInt(1,this.maxYCoord)/10))*10]
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

  gotFood() {
    return (this.body[0][0] == this.target[0] && this.body[0][1] == this.target[1])
  }

  moveSnake() {
    if(this.gotFood()){
      snake.body.push(this.target)
      this.updateTargetSquare()
      console.log(this.body)
    }
    
    {let newX = this.body[0][0] + this.xChange
    let newY = this.body[0][1] + this.yChange
    this.body.unshift([newX,newY]);
    this.body.pop();
    if(this.gameOver()) {
      console.log("you lose")
      this.gameNotOver = false;
    }}
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
  drawBoard() {
    const board = document.getElementById('snakeGameCanvas');
    const boardCTX = board.getContext('2d');
    boardCTX.fillStyle = "white"
    boardCTX.fillRect(0,0, 1000, 750)
  }

  drawSnake() {
    const board = document.getElementById('snakeGameCanvas')
    const boardCTX = board.getContext('2d')
    boardCTX.fillStyle = 'darkred';
    boardCTX.strokeStyle = 'yellow';
    for(let i = 0; i < this.body.length ; i++) {
      boardCTX.fillRect(this.body[i][0],this.body[i][1], 10, 10);
      boardCTX.strokeRect(this.body[i][0],this.body[i][1], 10, 10)
    }
  }

  bitThemself() {
    if(this.body.length >3){
      let tail = this.body.slice(1)
      let uniqTail = tail.filter(a => a[0] == this.body[0][0] && a[1] == this.body[0][1])
      if (uniqTail.length > 0) {
        console.log("fucknuggets")
        return true
      }
    }
    return false 
  }

  gameOver() {
    let hitZeroX = this.body[0][0] < 0
    let hitMaxX = this.body[0][0] > 1000
    let hitZeroY = this.body[0][1] < 0
    let hitMaxY = this.body[0][1] > 750

   return hitZeroX || hitMaxX || hitMaxY || hitZeroY || this.bitThemself()
  }
}
let snake = new Snake