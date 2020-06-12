const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

player = new Player(canvas, context)




function loop(){
  player.y -= 10
  player.render()
  window.requestAnimationFrame(loop)
}

loop()
