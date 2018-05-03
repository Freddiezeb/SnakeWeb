//TODO: Pictures to snake/food
//TODO: Better UI
//FIXME: Walk backwards

var snake;
var gridScale = 30;

var food;

function setup() {
    createCanvas(800, 800);
    snake = new Snake();

    frameRate(10);
    pickLocation();
}

function draw() {
    background(51);

    if (snake.eat(food)) {
        pickLocation();
    }
    snake.death();
    snake.update();
    snake.show();

    fill(255, 0, 100);
    rect(food.x, food.y, gridScale, gridScale);
}

function pickLocation() {
    var cols = floor(width/gridScale);
    var rows = floor(height/gridScale);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(gridScale);
}

function mousePressed() {
    snake.total++;
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        snake.dir(0, -1);
    }
    else if(keyCode === DOWN_ARROW)
    {
        snake.dir(0, 1);
    }
    else if(keyCode === LEFT_ARROW)
    {
        snake.dir(-1, 0);
    }
    else if(keyCode === RIGHT_ARROW)
    {
        snake.dir(1, 0);
    }
}