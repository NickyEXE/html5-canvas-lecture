class Obstacle {

    constructor(canvas, context){
        this.x = canvas.width;
        this.y = canvas.height - 60;
        this.width = 20
        this.height = 60
        this.context = context
        this.canvas = canvas
        this.dx = 10
        this.constructor.all.push(this)
    }

    update(){
        this.x -= this.dx
        if (this.x + this.width < 0){
            this.remove()
        }
    }

    draw(){
        this.context.fillStyle = "red"
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }

    remove(){
        this.constructor.all = this.constructor.all.filter(obstacle => obstacle !== this)
    }

    static updateAll(){
        this.all.forEach(obstacle => obstacle.update())
    }

    static drawAll(){
        this.all.forEach(obstacle => obstacle.draw())
    }
}

Obstacle.all = []
