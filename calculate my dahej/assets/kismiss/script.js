function goNext(){
  window.location.href = "song.html";
}
const song = document.getElementById("song");
const lyricsBox = document.getElementById("lyrics");

/* Synced Lyrics */
const timedLyrics = [

  { text:"हमरा से पहले ना हमरा से केहु बाद 💖", time:0 },

  { text:"Love you love you कही 💕", time:3.6 },

  { text:"हमरा से पहले ना हमरा से केहु बाद 💗", time:6.0 },

  { text:"Love you love you कही 💞", time:9.5 },

  { text:"हो love you love you कही ❤️", time:12 },

  { text:"हमके बनाला बॉडीगॉर्ड ब्यूटी बनल रही 😍", time:14 },

  { text:"हमके बनाला बॉडीगॉर्ड ब्यूटी बनल रही ✨", time:18 }

];

let index = 0;

/* Auto Play After Page Load */
window.onload = () => {

  song.play().catch(()=>{
    lyricsBox.innerText="▶️ Tap anywhere to start...";
  });

};

/* If autoplay blocked */
document.body.addEventListener("click",()=>{
  song.play();
});


song.addEventListener("timeupdate",()=>{

  if(index < timedLyrics.length){

    if(song.currentTime >= timedLyrics[index].time){

      lyricsBox.innerText = timedLyrics[index].text;

      lyricsBox.style.animation="none";
      lyricsBox.offsetHeight;
      lyricsBox.style.animation="fade 0.6s ease";

      index++;

    }
  }

});
 setTimeout(function() {
      window.close()
  }, 26000);