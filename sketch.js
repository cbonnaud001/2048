let grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];


function setup()
{
  createCanvas(600, 600);
}



function addNumber()
{
  let possible = [];
  for (i = 0 ; i < 4 ; i++)
  {
    for (j = 0 ; j < 4 ; j++)
    {
      if (grid[i][j] === 0)
        possible.push({x:i,y:j});
    }
  }
  if (possible.length === 0)
    return;
  let newNb = possible[Math.floor(Math.random() * possible.length)];
  console.table(grid)
  grid[newNb.x][newNb.y] = Math.random()> 0.5 ? 2 : 4;
}

function display()
{
  let w = width / 4;
  for (i = 0 ; i < 4 ; i++)
  {
    for (j = 0 ; j < 4 ; j++)
    {
      noFill();
      strokeWeight(2);
      stroke(0);
      textSize(64);
      rect(i * w, j * w, w, w);
      if (grid[i][j] !== 0)
      {
        textAlign(CENTER, CENTER);
        fill(0);
        noStroke();
        text(grid[i][j], i * w + w/2, j * w + w/2);
      }
    }
  }
}

function keyPressed()
{
  switch (keyCode)
  {
    case LEFT_ARROW :
    console.log('left');
    break;
    case RIGHT_ARROW :
    console.log('right');
    break;
    case UP_ARROW :
    console.log('up');
    break;
    case DOWN_ARROW:
    console.log('down');
    break;
  }
}

function slide(table)
{

}

function draw()
{
  background(255);
  display();
  //addNumber();
}
