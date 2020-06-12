class Obstacle {
    constructor(canvas, context){
        this.canvas = canvas,
        this.context = context
        this.x = canvas.width
        this.y = canvas.height - 40
        this.height = 40
        this.width = 40
        if(this.constructor.all){this.constructor.all.push(this)}
        else{this.constructor.all = [this]}
    }

    update(){
        this.x -= 5
        if (this.x < 0 - this.width){this.remove()}
    }

    remove(){
        this.constructor.all = this.constructor.all.filter(obstacle => obstacle !== this)
    }

    render(){
        const {context, canvas, x, y, width, height} = this
        context.fillStyle = "yellow"
        context.fillRect(x, y, width, height)
    }

}
