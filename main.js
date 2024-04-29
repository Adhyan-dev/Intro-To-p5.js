function preload()
{

}
function setup()
{
  canvas=createCanvas(400,400); 
  canvas.position(110,260);
  video = createCapture(VIDEO);
  tint_color = "";
  video.hide();
}
function draw()
{
  image(video,0,0,400,400);
  tint(tint_color);
}
function applyfilter()
{
  tint_color = document.getElementById("t1").value;
}
function take_snapshot()
{
 save('student_name.png');
 
}

