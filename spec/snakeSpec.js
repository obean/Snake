describe('snake', () => {
  let snake = new Snake()
  it('should construct an instance of snake class with a random coordinate in the initial snake head', () => {
    
    console.log(snake.body[0])
    console.log(snake.body[1])
    console.log(snake)
    expect(snake.body[0][0] > 0 && snake.body[0][0] < 100).toBeTruthy()
    expect( snake.body[0][1] > 0 ).toBeTruthy()
  })

  it('should generate a food square in the same grid as the snake', () => {
    expect((100 > snake.target[0] > 0) && (100 > snake.target[0] > 0) ).toBeTruthy(0)
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
})