img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario05.png");

  world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
 canvas = createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);
  poseNet = ml5.poseNet(video, modelLoaded);
  canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
}
function modelLoaded(){
console.log("Model is Loaded!");
  poseNet.on('pose', gotPoses);
}

function draw() {
  background("#D3D3D3");
  if(noseX <300){
    marioX = marioX + 1;
      image(img,marioX, marioY, 40,70);
  }
  if(noseX >300)
    {
      marioX = marioX-1;
    }
  if(noseY <150)
    {
      marioY = marioY - 1;
    }
  if(noseY >150)
    {
      marioY = marioY  +1;
    }
}
function gotPoses(results){
  if(results.length>0 )
    {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log(noseX + "= noseX"+ noseY + "= noseY");
    }
}
 function startGame(){

}






