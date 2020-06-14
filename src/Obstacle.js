class Obstacle {

    constructor(canvas, context){
        this.canvas = canvas
        this.context = context
        this.x = canvas.width
        this.y = canvas.height - 100
        this.width = 40
        this.height = 100
        this.dx = 10
        this.constructor.all.push(this)
    }

    update(){
        this.x -= this.dx
        if (this.x < -this.width){
            this.remove()
        }
    }

    render(){
        context.fillStyle = "red"
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    remove(){
        this.constructor.all = this.constructor.all.filter(obstacle => obstacle !== this)
    }

}

Obstacle.all = []
