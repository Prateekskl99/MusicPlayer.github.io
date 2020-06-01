
var divlength = document.querySelectorAll(".song").length;

for(var i=0;i<divlength;i++)
{
    var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
    var demo1 = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = "music/a.webm";

var song2 = new Audio();
song2.src = "music/b.webm";

var song3 = new Audio();
song3.src = "music/c.webm";

var song4 = new Audio();
song4.src = "music/d.mp4";

var song5 = new Audio();
song5.src = "music/e.mp4";

var song6 = new Audio();
song6.src = "music/f.webm";

var song7 = new Audio();
song7.src = "music/g.webm";

var song8 = new Audio();
song8.src = "music/h.mp4";

var song9 = new Audio();
song9.src = "music/i.webm";

function playsong()
{
   var songId = this.innerHTML;

   switch(songId)
   {
       case 'a':
            song1.play();
       break;
       case 'b':
            song2.play();
       break;
       case 'c':
            song3.play();
       break;
       case 'd':
            song4.play();
       break;
       case 'e':
            song5.play();
       break;
       case 'f':
            song6.play();
       break;
       case 'g':
            song7.play();
       break;
       case 'h':
            song8.play();
       break;
       case 'i':
            song9.play();
       break;

       default:
           alert("Wrong Choice"); 
       break;
   }

}

function pausesong()
{
    var songId = this.innerHTML;

   switch(songId)
   {
       case 'a':
            song1.pause();
       break;
       case 'b':
            song2.pause();
       break;
       case 'c':
            song3.pause();
       break;
       case 'd':
            song4.pause();
       break;
       case 'e':
            song5.pause();
       break;
       case 'f':
            song6.pause();
       break;
       case 'g':
            song7.pause();
       break;
       case 'h':
            song8.pause();
       break;
       case 'i':
            song9.pause();
       break;

       default:
           alert("Wrong Choice"); 
       break;
   }
}