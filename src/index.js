const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

player = new Player(canvas, context)

let playing = false

function intersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
    r2.x + r2.width < r1.x ||
    r2.y > r1.y + r1.height ||
    r2.y + r2.height < r1.y)
}

new Obstacle(canvas, context)
setInterval(() => new Obstacle(canvas, context), 2000)

function lose(){
  toggleStart()
  context.font = "30px 'Press Start 2P'"
  context.textAlign = "center";
  context.fillText("You lose :(", canvas.width/2, canvas.height/2)
}

function reset(){
  Obstacle.all = []
}

function loop(){
  context.clearRect(0,0, canvas.width, canvas.height)
  player.update()
  Obstacle.all.forEach(obstacle => obstacle.update())
  player.render()
  Obstacle.all.forEach(obstacle => obstacle.render())
  Obstacle.all.forEach(obstacle => {
    if (intersect(player, obstacle)){
      lose()
      reset()
    }
  })
  if (playing){window.requestAnimationFrame(loop)}
}

const toggleStart = () => {
  if (playing) playing = false
  else{
    playing = true
    loop()
  }
}

const handleKeyDown = (e) => {
  if(e.keyCode === 13) toggleStart()
  if(e.keyCode === 32) player.jump()
}

document.addEventListener("keydown", handleKeyDown)
