describe('snake', () => {
  let snake = new Snake()
  it('should construct an instance of snake class with a random coordinate in the initial snake head', () => {
    
    console.log(snake.body[0])
    console.log(snake.body[1])
    console.log(snake)
    expect(snake.body[0][0] > 0 && snake.body[0][0] < 990).toBeTruthy()
    expect(740 > snake.body[0][1] > 0 ).toBeTruthy()
  })

  it('should generate a food square in the same grid as the snake', () => {
    expect((990 > snake.target[0] > 0) && (740 > snake.target[1] > 0) ).toBeTruthy(0)
  })

  describe('#updateTargetSquare', () => {
    it('should not put the target square in coordinates the snake currently occupies', () => {
      let snake = new Snake([[0,0],[0,1],[1,0],[1,1],[2,0],[2,1],[0,2],[1,2]], [1,1], 2 )
      console.log(snake.body)
      console.log(snake.target)
      snake.updateTargetSquare()
      expect(snake.target).toEqual([2,2])
      console.log(snake.updateTargetSquare())
      
    })
  })

  describe('#moveSnake', () => {
    it('it should add the supplied coordinate to the head of the snake and remove the tail', () => {
      let snake = new Snake([[0,0],[0,1]], [1,2], 2 )
      snake.moveSnake([1,0]);
      expect(snake.body).toEqual([[1,0],[0,0]])
    })

    // need test to not remove last one if it gets the food
  })
})
//[[101,100], [102,100], [103,100], [104,100],[105,100],[106,100],[107,100], [108,100], [109,100], [110,100],[111,100],[112,100]]