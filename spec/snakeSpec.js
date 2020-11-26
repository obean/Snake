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

  describe('#gotFood()', () => { 
    it('should return true when snakes head is equal coordinates to target', () => {
      let snake = new Snake([[1,2], [0,0],[0,1]], [1,2], 2 )
      expect(snake.gotFood()).toBeTruthy()
    })

    it('should return false when snake doesn\'t get the food', () => {
      let snake = new Snake([[1,2], [0,0],[0,1]], [1,0], 2 )
      expect(snake.gotFood()).toBeFalsy()
    })
  })

  describe('#moveSnake', () => {
    it('it should move the snake left if  xChange = -10', () => {
      let snake = new Snake([[50,2]])
      snake.xChange = -10
      snake.moveSnake()
      expect(snake.body).toEqual([[40,2]])
    })
    it('it should move the snake right if  xChange = 10', () => {
      let snake = new Snake([[50,2]])
      snake.xChange = 10
      snake.moveSnake()
      expect(snake.body).toEqual([[60,2]])
    })
    it('it should move the snake up if  yChange = 10', () => {
      let snake = new Snake([[50,2]])
      snake.yChange = 10
      snake.moveSnake()
      expect(snake.body).toEqual([[50,12]])
    })

    it('it should move the snake down if  yChange = 10', () => {
      let snake = new Snake([[50,12]])
      snake.yChange = -10
      snake.moveSnake()
      expect(snake.body).toEqual([[50,2]])
    })

    it('removes the tail of the snake whilst keeping the snake length the same', () => {
      let snake = new Snake([[10,20], [10,10],[10,0]])
      snake.yChange = 10
      snake.moveSnake()
      expect(snake.body).toEqual([[10,30], [10,20], [10,10]])
    })
    

  })

  describe('#bitThemself',() => {
    it('returns true when the head overlaps with anyother part of the snakes body', () => {
      let snake = new Snake([[10,0],[10,30],[10,20], [10,10],[10,0]])
      expect(snake.bitThemself()).toBeTruthy()
    })

    it('returns false when the head does not overlap with any other body part', () => {
      let snake = new Snake([[10,20], [10,10],[10,0]])
      expect(snake.bitThemself()).toBeFalsy()
    })


  })

  describe('gameOver', () => {
    it('returns true when the bitThemself() is true', () => {
      let snake = new Snake([[10,1],[10,30],[10,20], [10,10],[10,1]])
      expect(snake.gameOver()).toEqual(true)
    })
    it('returns true when snake passes x =0', () => {
      let snake = new Snake([[-10,1]])
      expect(snake.gameOver()).toEqual(true)
    })
    it('returns true when snake passes y =0', () => {
      let snake = new Snake([[10,-1]])
      expect(snake.gameOver()).toEqual(true)
    })
    it('returns true when snake passes y =750', () => {
      let snake = new Snake([[10,751]])
      expect(snake.gameOver()).toEqual(true)
    })
    it('returns true when snake passes x = 1000', () => {
      let snake = new Snake([[1001,5]])
      expect(snake.gameOver()).toEqual(true)
    })
    it('returns false when snake is within boundaries', () => {
      let snake = new Snake([[10,20], [10,10],[10,0]])
      expect(snake.gameOver()).toBeFalsy()
    })
  })
})
//[[101,100], [102,100], [103,100], [104,100],[105,100],[106,100],[107,100], [108,100], [109,100], [110,100],[111,100],[112,100]]