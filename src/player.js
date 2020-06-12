class Player {
    constructor(canvas, context){
        this.canvas = canvas
        this.context = context
        this.x = 20
        this.y = canvas.height - 80
        this.width = 40
        this.height = 80
    }

    jump = () => {

    }

    render = () => {
        const {context, canvas, x, y, width, height} = this
        context.clearRect(0,0, canvas.width, canvas.height)
        context.fillStyle = "red"
        context.fillRect(x, y, width, height)
    }




}
