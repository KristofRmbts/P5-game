class Player {
    constructor() {
        this.width = 100
        this.height = 140
        this.x = 50
        this.y = 600-this.height
        this.velocity = 0
        this.gravity = 0.2
        this.score = 0 
    }

    draw() {
        this.y += this.velocity
        this.velocity += this.gravity

        if (this.y >= 600-this.height) { // Can't leave bottom screen
            this.y = 600-this.height
        }

        // if (this.y <= 0) { // Can't leave top of screen
        //     this.y = 0
        // }  

        image(game.playerImage, this.x, this.y, this.width, this.height)
    }

    jump() {
        if (this.y > 200) { // Can't jump when above 300
            this.velocity = -10
        }
    }
} 