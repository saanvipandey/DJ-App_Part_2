All_is_found_song = "";
Harry_Potter_Theme_Song = "";

function preload()
{
     All_is_found_song = loadSound("Frozen.mp3");
     Harry_Potter_Theme_Song = loadSound("Hedwig.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}
