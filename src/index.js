const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

const initialCoordinates = {x: 10, y: canvas.height - 40, width: 40, height: 40}
const player = new Player(canvas, context, initialCoordinates)
let frame = 0
let nextObstacleFrame = Math.floor(Math.random()*60) + 30
let lose = false
let playing = false

function intersect(r1, r2) {
    return !(r2.x > r1.x + r1.width ||
      r2.x + r2.width < r1.x ||
      r2.y > r1.y + r1.height ||
      r2.y + r2.height < r1.y)
}

function loop(){
    if (playing){
        if (frame === nextObstacleFrame){
            nextObstacleFrame += Math.floor(Math.random()*60) + 30
            new Obstacle(canvas, context)
        }
        context.clearRect(0,0, canvas.width, canvas.height)
        player.update()
        Obstacle.updateAll()
        player.draw()
        Obstacle.drawAll()
        console.log(Obstacle.all)
        Obstacle.all.forEach(obstacle => {
            if (intersect(obstacle, player)){
                obstacle.remove()
                loseGame()
            }
        })
        window.requestAnimationFrame(loop)
        frame ++
    }
}

function start() {
    playing = true
    loop()
}

function stop(){
    playing = false
}

function loseGame(){
    stop()
    lose = true
    context.font = "30px 'Press Start 2P'"
    context.textAlign = "center"
    context.fillText("You lose lol", canvas.width/2, canvas.height/2)
}

function controller(e){
    console.log(e)
    switch (e.code){
        case "Space":
            player.jump()
            break
        case "Enter":
            playing ? stop() : start()
            break;
    }
}

document.addEventListener("keydown", controller)

// // frame 1
// context.clearRect(0,0, canvas.width, canvas.height)
// context.fillRect(player.x, player.y, player.width, player.height)

// // frame 2
// context.clearRect(0,0, canvas.width, canvas.height)
// player.y -= 10
// context.fillRect(player.x, player.y, player.width, player.height)

// // frame 3
// context.clearRect(0,0, canvas.width, canvas.height)
// player.y -= 10
// context.fillRect(player.x, player.y, player.width, player.height)
