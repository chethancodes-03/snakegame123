var score = 0;
var prev = 0;
function Snake() {
  this.x = 1;
  this.y = 1;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0; // Start with 3 segments in the tail
  this.tail = [];
   
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 9) {
      score++;
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  this.death = function(){
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d == 0) {
        fill(255, 0, 100);
    	  rect(this.x, this.y,15, 15, 15);
        setTimeout(function() {
          alert("Game Over and you scored " + score + " points.");
        }, 50);
        s.restartGame();
      }
    }
  }
  this.restartGame = function(){
    this.x = 1;
    this.y = 1;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    score = score - prev;
    prev = score;
  }

  this.returnside = function() {
    if (this.x == 0){
      this.x = 440;
    }
    else if(this.y == 0){
      this.y = 338;
    }
    else if(this.y == 338){
      this.y = 0;
    }
    if (this.x == 438){
      this.x = 0;
    }
  }

  this.update = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed *10;
    this.y = this.y + this.yspeed * 10;

    this.x = constrain(this.x, 0, width - 12);
    this.y = constrain(this.y, 0, height - 12);
  }

  this.show = function() {
    fill(500);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y,15, 15, 15);
    }
    rect(this.x, this.y,15, 15, 15);

  }
}






