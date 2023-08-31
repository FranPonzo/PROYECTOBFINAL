let character // variable personaje
let fondo
let bauser 
var paralax = 0
var px = 100,py= 300;
var mx,my
var enx = 800,eny= py, ent = 100,env;
var flag = false
var puntos = 0
var a,h,k,f;
var x=100;
var y=300;
var vel =5
let link = createA('https://ponzomesa.wixsite.com/tp-8', 'this is a link');
link.position(0, 0);
function preload(){

    character = loadImage('data/-giul.png')  
    fondo = loadImage('data/pai.jpeg')
  bauser = loadImage('data/alber.png')
}

function setup() {
 
  createCanvas(700, 400);
  env = 1
  var tx = character.width * 0.1  
  var ty = character.height * 0.1

  character.resize(tx,ty) 
  bauser.resize(ent,ent)   
  fondo.resize(width,height)
  
 //(x,y), tamaño del sprite (tx,ty) cuadros y velocidad
  textSize(25)
  imageMode(CENTER)
  noCursor()
  textAlign(CENTER)
  
}

function draw() {
  image(fondo,width/2 - paralax,height/2)
  
  image(fondo,3*width/2 - paralax,height/2)
  image(character,y,x)
  paralax += 3
  
  if(paralax > width){
     paralax = 0
     }
  ////////////////////////////
  fill(255)
  image(bauser,enx,eny)
  enx -= env
  
  
  fill(255,0,0)
  circle(mouseX,py,30)
  if(mouseIsPressed && !flag){
      flag = true 
      h = py
      k = mouseX
      f = px
      var vy = (k-h)/2+h
      var vx = height/4
      mx = py
      my = px
      
      a = (vy-f)/((vx-h)*(vx-k))
     }
  
  if (keyIsPressed){
      if (key == 'W' || key == 'w' ){
        y -= vel
      }      
      if (key == 'S' || key == 's' ){
        y += vel
      }
      if (key == 'A' || key == 'a'){
        x -= vel
      }
      if (key == 'D' || key == 'd' ){
        x += vel
      }
  
  }
  if(flag){
     mx += 4
     my = a *(mx-h)*(mx-k)+f
     circle(mx,my,10) 
     if(mx > width || mx < 0 || my < 0 || my >height){
       flag = false       
       }
     var minHitX = mx < enx + (ent/2) && mx > enx - (ent/2)
     var minHitY = my < eny + (ent/2) && my > eny - (ent/2)
    if(minHitX && minHitY){
      enx = 800
    env = random(1,4);
      puntos += 300
    }
     }
   
    var inHitX = enx < px + (character.width/2) && enx > px - (character.width/2)
  var inHitY = eny < py + (character.height/2) && eny > py - (character.height/2)
    if(inHitX && inHitY){
     background(0)
    text("GAME OVER",width/2,height/2)
    noLoop()     
     }
  fill(255)
  text("Puntos: " + puntos,width/2,height*0.1)
  puntos ++
  
}

