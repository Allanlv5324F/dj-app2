var song = "";

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song = loadSound("music2.mp3");    
}

function draw()
{
    image(video, 0,0,600,500)
}

function play()
{
    song.play();
    console.log("Song is playing !!!")
}
