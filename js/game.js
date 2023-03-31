class Game {
    constructor() {
      this.background = new Background()
      this.backgroundImages
      this.player = new Player()
      this.playerImage
      this.obstacles = []
      this.coinImage
    //   this.level = 1
    }
  
    preload() {
      this.backgroundImages = [
        { src: loadImage("./assets/background/plx-1.png"), x: 0, speed: 0 },
        { src: loadImage("./assets/background/plx-2.png"), x: 0, speed: 1 },
        { src: loadImage("./assets/background/plx-3.png"), x: 0, speed: 2 },
        { src: loadImage("./assets/background/plx-4.png"), x: 0, speed: 3 },
        { src: loadImage("./assets/background/plx-5.png"), x: 0, speed: 4 }
      ]
  
      this.playerImage = loadImage("./assets/player/bb8.gif")
      this.coinImage = loadImage("./assets/coins/tile000.png")
    }

    checkWinningCondition() {
    if (this.player.score >= 1000) {
        fill("yellow")
        textSize(50)
        text("You won!", 200, 300)
        noLoop()
      }
    }
  
    draw() {
      clear()
      this.background.draw()
      this.player.draw()
  
      // Every x frames we want to push a new coin into the array
      if (frameCount % 90 === 0) {
        this.obstacles.push(new Obstacle(this.coinImage))
      }
  
      // Draw the obstacles
      this.obstacles.forEach(obstacle => {
        obstacle.draw()
      })
  
      this.obstacles = this.obstacles.filter(obstacle => {
        if(obstacle.collision(this.player) || obstacle.x < -obstacle.width) {
            return false // false bc should not be in the array
        } else {
            return true // rest should be in the array
        }
      })

      this.checkWinningCondition()
    }
  }