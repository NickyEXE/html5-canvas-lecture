class Player {
    constructor(canvas, context, coords){
        this.x = coords.x;
        this.y = coords.y;
        this.width = coords.width
        this.height = coords.height
        this.context = context
        this.canvas = canvas
        this.dy = 0
        this.jumping = false
    }

    update(){
        if (this.jumping){
            this.dy --
        }
        if (this.y + this.height > this.canvas.height){
            this.jumping = false
            this.y = this.canvas.height - this.height
            this.dy = 0
        }
        this.y -= this.dy
    }

    jump(){
        if (!this.jumping){
            this.jumping = true
            this.dy = 25
        }
    }

    draw(){
        this.context.fillStyle = "yellow"
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }


}
