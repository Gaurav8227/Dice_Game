

var random1 = Math.floor(Math.random()*6)+1;
var rimage = "dice" + random1 + ".png";
var rsource = rimage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",rsource);


var random2 = Math.floor(Math.random()*6)+1;
var rimage2 = "dice" + random2 + ".png";
var rsource2 = rimage2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",rsource2);

if(random1 > random2)
{
      document.querySelector("h1").innerHTML = "🎊Player 1 wins!";
}

else if(random2 > random1)
{
  document.querySelector("h1").innerHTML = "🎊Player 2 wins!";
}

else   // draw
{
  document.querySelector("h1").innerHTML = "🎊Draw !";
}
