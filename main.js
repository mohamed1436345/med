var videoCategories = {
    "web devolopment": [
      "video1.mp4",
      "video2.mp4",
      "web2.mp4"
    ],
    "Marketing": [
      "mar1.mp4",
      "mar2.mp4",
      "mar3.mp4"
    ],
    "desigh": [
      "video1.mp4",
      "https://www.example.com/video8.mp4",
      "https://www.example.com/video9.mp4"
    ]
  };

  var currentCategory = "web devolopment";
  var currentVideoIndex = 0;
  var videoPlayer = document.createElement('video');  
  videoPlayer.controls = false ;
  videoPlayer.autoplay = false ;
  videoPlayer.src = videoCategories[currentCategory][currentVideoIndex];

  var videoContainer = document.getElementById('video-container');
  videoContainer.appendChild(videoPlayer);

  var categoryButtonsContainer = document.getElementById('category-buttons');
  Object.keys(videoCategories).forEach(function(category) {
    var button = document.createElement('button');
    button.textContent = category;
    button.addEventListener('click', function() {
      changeCategory(category);
    });
    categoryButtonsContainer.appendChild(button);
  });

  function changeCategory(category) {
    currentCategory = category;
    currentVideoIndex = 0;
    videoPlayer.src = videoCategories[currentCategory][currentVideoIndex];
    videoPlayer.play();
  }

  function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoCategories[currentCategory].length;
    videoPlayer.src = videoCategories[currentCategory][currentVideoIndex];
    videoPlayer.play();
  }

  function previousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoCategories[currentCategory].length) % videoCategories[currentCategory].length;
    videoPlayer.src = videoCategories[currentCategory][currentVideoIndex];
    videoPlayer.play();
  }


  function changevolume(amount) {
    var audioobject = document.querySelector("video");
    audioobject.volume = amount;
  }
let ok = true
  function togglePower() {
    // powerOn = !powerOn;
    // if (powerOn) {
    //   videoPlayer.play();
    // } else {
    //   videoPlayer.pause();
    // }

    if(ok==true){
      videoPlayer.play();
      ok = false
    } else{
      videoPlayer.pause();
ok = true
    }
  
  }


  

  


  