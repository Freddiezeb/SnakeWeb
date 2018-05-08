function Snake(){
    this.x = startPos;
    this.y = startPos;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.score = 0;
    this.tail = [];

    this.dir = function(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.score++;
            console.log("Score: " + this.score)
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                console.log('starting over');
                this.x = startPos;
                this.y = startPos;
                this.xSpeed = 0;
                this.ySpeed = 0;
                this.score = 0;
                this.tail = [];
                trackMovement = "";
            }
        }
    }

    this.update = function()
    {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.score >= 1) {
            this.tail[this.score - 1] = createVector(this.x, this.y);
        }

        this.x = this.x + this.xSpeed * gridScale;
        this.y = this.y + this.ySpeed * gridScale;

        this.x = constrain(this.x, 0, width - gridScale);
        this.y = constrain(this.y, 0, height - gridScale);
    }

    this.show = function()
    {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, gridScale, gridScale);
        }
        rect(this.x, this.y, gridScale, gridScale);
    }
}