var images = ["img/firstbanner.jpg",
                "img/secondbanner.jpg",
                "img/thirdbanner.jpg",
             ];

function getRandomInt() {
  // No longer need min and max parameters, just the length of the array
  return Math.floor(Math.random() * images.length);
}

function nextBackground(){
  $("header").css("background-image", "url(" + images[getRandomInt()] + ")");
}

// For a continuously running timer, user setInterval, instead of setTimeout
setInterval(nextBackground, 2000);