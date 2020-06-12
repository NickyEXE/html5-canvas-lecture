class Player {
    constructor(canvas, context){
        this.canvas = canvas
        this.context = context
        this.x = 20
        this.y = canvas.height - 80
        this.width = 40
        this.height = 80
        this.dy = 0
        this.jumping = false
    }


    update = () => {
        this.y = this.y - this.dy
        if (this.jumping){
            this.dy -= 1
        }
        if (this.y > (this.canvas.height - this.height)){
            this.y = this.canvas.height - this.height
            this.jumping = false
        }
    }

    jump = () => {
        if (!this.jumping){
            this.jumping = true
            this.dy = 20
        }
    }

    render = () => {
        const {context, canvas, x, y, width, height} = this
        context.fillStyle = "red"
        context.fillRect(x, y, width, height)
    }




}
