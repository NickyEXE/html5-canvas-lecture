class Player {

    constructor(canvas, context, coordinates){
        this.canvas = canvas
        this.context = context
        this.x = coordinates.x
        this.y = coordinates.y
        this.width = coordinates.width
        this.height = coordinates.height
        this.dy = 0
        this.jumping = false
    }

    jump(){
        if(!this.jumping){
            this.dy = 25
            this.jumping = true
        }
    }

    update(){
        if (this.jumping){
            this.dy -= 0.9
        }
        if (this.y + this.height > this.canvas.height){
            this.dy = 0
            this.jumping = false
            this.y = this.canvas.height - this.height
        }

        this.y -= this.dy
    }


    render(){
        context.fillStyle = "yellow"
        context.fillRect(this.x, this.y, this.width, this.height)
    }


}
