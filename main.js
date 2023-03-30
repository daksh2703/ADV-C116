NoseX = 0;
NoseY = 0;

function preload() {
    lips = loadImage('https://i.postimg.cc/T168QCDk/lip.png');
    moustache = loadImage('https://i.postimg.cc/nrYyWBKn/moustache.png');
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(525, 250);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelReady);
    posenet.on('pose', getPose);
}

function getPose(result) {
    if (result.length > 0) {
        console.log(result);
        console.log('x cordinate - ' + result[0].pose.nose.x);
        console.log('y cordinate - ' + result[0].pose.nose.y);
        NoseX = result[0].pose.nose.x;
        NoseY = result[0].pose.nose.y;
    }
}

function modelReady() {
    console.log("The model is working")
}

function moustache_button() {
    filter = 1;
}

function lips_button() {
    filter = 2;
}

function draw() {
    image(video, 0, 0, 500, 400);
    if (filter == 1) {
        image(moustache, NoseX-25, NoseY, 50, 40);
    }
    else {
        image(lips, NoseX-25, NoseY+12.5, 50, 40);
    }
}

function takesnapshot() {
    save("Filter_img.png");
}

