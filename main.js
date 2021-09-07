function setup() {
    canvas = createCanvas(700, 700);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
  }

  function draw() {
    image(video,100,20,450,450);

    fill(0, 0, 455);
    stroke(0, 450, 0);
    rect(90, 10, 460, 20);
    rect(90, 450, 460, 20);
    rect(90, 10, 20, 460);
    rect(550, 10, 20, 460);
    circle(100, 30, 80);
    circle(560, 30, 80);
    circle(560, 450, 80);
    circle(100, 450, 80);
  }

  function saveImage(){
    save("digital_frame(crop-me).png");
  }