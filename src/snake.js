

class Snake {
    constructor(testBody, testTarget, testGridMax) {
        this.maxXCoord = testGridMax || 340
        this.maxYCoord = testGridMax || 340
        this.body = testBody || [[Math.round((this.getRandomInt(1, this.maxXCoord) / 10)) * 10, Math.round((this.getRandomInt(1, this.maxYCoord) / 10)) * 10]]
        this.target = testTarget || [Math.round((this.getRandomInt(1, this.maxXCoord) / 10)) * 10, Math.round((this.getRandomInt(1, this.maxYCoord) / 10)) * 10]
        this.xChange = 0
        this.yChange = 0
        this.gameNotOver = true
        this.paused = false
        this.score = 0
        this.highScore = localStorage.getItem("snakeHighScore") || 0
        //this.renderer = new SnakeRenderer
    }

    updateTargetSquare() {
        let newX = Math.round((this.getRandomInt(1, this.maxXCoord) / 10)) * 10
        let newY = Math.round((this.getRandomInt(1, this.maxYCoord) / 10)) * 10
        this.target = [newX, newY]
        if (this.body.filter(coord => (coord[0] == this.target[0]) && (coord[1] == this.target[1])).length > 0) {
            this.updateTargetSquare()
        }
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    gotFood() {
        return (this.body[0][0] == this.target[0] && this.body[0][1] == this.target[1])
    }

    updateScores() {
        this.score++;
        // if (this.score > this.highScore) {
        //     this.highScore = this.score
        // }
    }

    moveSnake() {
        console.log("poop")
        if (!this.paused) {
            if (this.gotFood()) {
                snake.body.push(this.target)
                this.updateScores();
                this.updateTargetSquare()
                console.log(this.body)
            }
            if (this.gameNotOver) {
                let newX = this.body[0][0] + this.xChange
                let newY = this.body[0][1] + this.yChange
                this.body.unshift([newX, newY]);
                this.body.pop();
                if (this.gameOver()) {
                    if(this.score > this.highScore) {
                        localStorage.setItem('snakeHighScore', String(this.score))
                    }
                    this.youLose()
                    clearInterval(interval)
                    this.gameNotOver = false;
                }
            }
        }
    }

    pauseGame() {
        this.paused = !this.paused
        console.log(this.paused)
    }

    // rendering methods
    drawFood() {
        const board = document.getElementById('snakeGameCanvas');
        const boardCTX = board.getContext('2d');
        boardCTX.fillStyle = 'lightgreen';
        boardCTX.strokeStyle = 'darkgreen';
        boardCTX.fillRect(this.target[0], this.target[1], 10, 10);
        boardCTX.strokeRect(this.target[0], this.target[1], 10, 10)
    }

    drawBoard() {
        const board = document.getElementById('snakeGameCanvas');
        const boardCTX = board.getContext('2d');
        boardCTX.fillStyle = "white"
        boardCTX.fillRect(0, 0, 1000, 750)
    }

    drawSnake() {
        const board = document.getElementById('snakeGameCanvas')
        const boardCTX = board.getContext('2d')
        boardCTX.fillStyle = 'darkred';
        boardCTX.strokeStyle = 'yellow';
        for (let i = 0; i < this.body.length; i++) {
            boardCTX.fillRect(this.body[i][0], this.body[i][1], 10, 10);
            boardCTX.strokeRect(this.body[i][0], this.body[i][1], 10, 10)
        }
    }

    youLose() {
        const board = document.getElementById('snakeGameCanvas')
        const boardCTX = board.getContext('2d')
        boardCTX.font = "30px Arial";
        boardCTX.strokeText("You Lose", 150, 150)
    }

    drawGameStatus() {
        if (this.paused) {
            const board = document.getElementById('snakeGameCanvas')
            const boardCTX = board.getContext('2d')
            boardCTX.font = "30px Arial";
            boardCTX.strokeText("paused", 150, 150)
        }
    }

    bitThemself() {
        if (this.body.length > 3) {
            let tail = this.body.slice(1)
            let uniqTail = tail.filter(a => a[0] == this.body[0][0] && a[1] == this.body[0][1])
            if (uniqTail.length > 0) {
                console.log("you bit yourself")
                return true
            }
        }
        return false
    }

    gameOver() {
        let hitZeroX = this.body[0][0] < 0
        let hitMaxX = this.body[0][0] > 340
        let hitZeroY = this.body[0][1] < 0
        let hitMaxY = this.body[0][1] > 340

        return (hitZeroX || hitMaxX || hitMaxY || hitZeroY || this.bitThemself())
    }
}

let snake = new Snake