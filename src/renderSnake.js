class SnakeRenderer {
  
  drawSnake(coords) {
    const board = document.getElementById('snakeGameCanvas')
    const boardCTX = board.getContext('2d')
    boardCTX.fillStyle = 'darkred';
    boardCTX.strokeStyle = 'yellow';
    
  }
}