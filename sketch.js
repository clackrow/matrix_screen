class Column {
  constructor(x, w){
    this.x = x;
    this.y = random(-2000, 0);
    this.w = w;
    this.height = 50;
    this.letters = '私は巨大なペニスと巨大なペニスを持っています';
    this.chars = []
    for(let i = 0; i < this.height; i++){
      this.chars[i] = this.letters[int(random(0, 22))];
    }
  }
  
  show(){
    textSize(this.w);
    for(let n = this.height; n > 0; n--){
      this.chars[n] = this.chars[n - 1];
    }
    for(let n = 0; n < this.height; n++){
      if(n == 0){
        fill(255);
      }
      else{
        fill(color(0,255,0, 200 - n*5));
      }
      if(random(0, 10) < 1){
          this.chars[n] = this.letters[int(random(0, 22))];
        }
      text(this.chars[n], this.x, this.y - n*this.w);
    }
  }
  
  fall(){
    this.y += this.w;
    if(this.y > height + 1000){
      this.y = random(-2000, 0);
    }
  }
}


c = [];
w = 20;
function setup() {
  createCanvas(windowWidth, windowHeight + 200);
  for(let i = 0; i < width/w; i++){
    c[i] = new Column(i*w, w);
  }
}

function draw() {
  background(0);
  frameRate(15);
  for(let i = 0; i < width/w; i++){
    c[i].show();
    c[i].fall();
  }
}
