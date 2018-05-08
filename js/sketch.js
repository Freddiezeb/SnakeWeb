//TODO: Pictures to snake/food
//TODO: Better UI
//FIXME: [x] Walk backwards
//NOTE: Pressing 2 directions same time causes bug

var snake;
var gridScale = 30;

var w = window.innerWidth;
var h = window.innerHeight;

var food;
var mapSize = 900;
var startPos = mapSize / 2;
var trackMovement;

var screenWidth;
var screenHeight;

function setup() {
    screenWidth = calculateScreen(w, gridScale);
    screenHeight = calculateScreen(h, gridScale);
    createCanvas(screenWidth, screenHeight);
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

function calculateScreen(size, scale)
{
    var temp;
    for(var i = scale; i < size; i += scale)
    {
        temp = i;
    }
    return temp;
}

function pickLocation() {
    var cols = floor(width/gridScale);
    var rows = floor(height/gridScale);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(gridScale);
}

function mousePressed() {
    snake.score++;
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        if(trackMovement === "Down")
        {
            snake.dir(0, 1);
            trackMovement = "Down";
        }
        else
        {
            snake.dir(0, -1);
            trackMovement = "Up";
        }
    }
    else if(keyCode === DOWN_ARROW)
    {
        if(trackMovement === "Up")
        {
            snake.dir(0, -1);
            trackMovement = "Up";
        }
        else
        {
            snake.dir(0, 1);
            trackMovement = "Down";
        }
    }
    else if(keyCode === LEFT_ARROW)
    {
        if(trackMovement === "Right")
        {
            snake.dir(1, 0);
            trackMovement = "Right";
        }
        else
        {
            snake.dir(-1, 0);
            trackMovement = "Left";
        }
    }
    else if(keyCode === RIGHT_ARROW)
    {
        if(trackMovement === "Left")
        {
            snake.dir(-1, 0);
            trackMovement = "Left";
        }
        else
        {
            snake.dir(1, 0);
            trackMovement = "Right";
        }
    }
}