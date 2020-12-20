let music;

$(document).ready(function () {

    music = new Howl({
        src: ["audio/2.mp3", "audio/happy.mp3", "audio/3.mp3"],
        loop: true,
        volume: 0.1

    });




});

$("#tree>img").click(function(e){ 
    music.stop();
    let name = e.target.id;
    if(name == "toy1"){
        music.play(1);
    }
    else if(name == "toy2"){
        music.play(2);
    }
    else if(name == "toy3"){
        music.play(3);
    }
});

let timew = setInterval(function(){
    let newYear = new Date("1 January 2021 00:00:00");
    let now = new Date();
    let diff = newYear - now;
    console.log(diff);

    let seconds = Math.floor(diff/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    let days2 = hours % 24;
    let hours2 = minutes % 60;
    let minutes2 = seconds % 60;

    $("#seconds").text(minutes2);
    $("#minutes").text(hours2 + " :");
    $("#hours").text(days2 + " :");
    $("#days").text(days + " :");
    
}, 1000);
