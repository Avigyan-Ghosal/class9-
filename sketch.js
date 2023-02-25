
function setup() {
  createCanvas(400,400);
  background(51);
  

}

function draw() 
{
  
text(" Press left to make the background red Right to make the background", 8, 22);

text(" blue up to make the background yellow and down to make the ", 8, 38);

text("background green", 8, 50);
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

