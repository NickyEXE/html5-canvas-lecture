const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")
let playing = false
let frame = 0

const initialPlayerCoordinates = {
    x: 20,
    y: canvas.height - 80,
    width: 40,
    height: 80
}

const player = new Player(canvas, context, initialPlayerCoordinates)
let nextAnimationFrame = 60 + Math.floor(Math.random()*60)

function intersect(r1, r2) {
    return !(r2.x > r1.x + r1.width ||
      r2.x + r2.width < r1.x ||
      r2.y > r1.y + r1.height ||
      r2.y + r2.height < r1.y)
  }

function lose(obstacle){
    playing = false
    context.font = "30px 'Press Start 2P'"
    context.textAlign = "center"
    context.fillText("You Lose Scrub", canvas.width/2, canvas.height/2)
    obstacle.remove()
}

function loop(){
    if (playing){
        frame ++
        if (frame === nextAnimationFrame){
            new Obstacle(canvas, context)
            nextAnimationFrame += 60 + Math.floor(Math.random()*60)
        }
        context.clearRect(0, 0, canvas.width, canvas.height)
        player.update()
        Obstacle.all.forEach(obstacle => obstacle.update())
        player.render()
        Obstacle.all.forEach(obstacle => obstacle.render())
        Obstacle.all.forEach(obstacle => intersect(obstacle, player) && lose(obstacle))
        window.requestAnimationFrame(loop)
    }
}

function controller(e){
    if (e.code === "Enter"){
        if (!playing){
            playing = true
            loop()
        }
        else {
            playing = false
        }
    }
    if (e.code === "Space"){
        player.jump()
    }
}

document.addEventListener("keydown", controller)

loop()
