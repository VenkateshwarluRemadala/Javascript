function showAlb() {
  let alb1 = document.getElementById("alb");
  let opt1 = alb1.options[alb1.selectedIndex];
 
  if (opt1.text === "magadeera") {
    document.getElementById("albData").innerHTML = albumList[0];
   } else if (opt1.text === "darling") {
     document.getElementById("albData").innerHTML = albumList[1];
   } else if (opt1.text === "mirchi") {
    document.getElementById("albData").innerHTML = albumList[2];
   }
}

function showsng() {
  let sng1 = document.getElementById("sng");
  let opt2 = sng1.options[sng1.selectedIndex];

  for (i of songList) {
    if (i.songName === opt2.text) {
      let sD = `Song: ${i.songName}\nAlbum: ${i.album}\nLyrics: ${i.Lyrics}\nSinger: ${i.Singer}\nMusic Director: ${i.musicDirector}`;
      document.getElementById("sngData").innerHTML = sD;
    }
  }
}

function showart() {
  let art1 = document.getElementById("art");
  let opt3 = art1.options[art1.selectedIndex];

  for (i of artistList) {
    if (i.artistName === opt3.text) {
      let aD = `Artist: ${i.artistName}\nAlbum: ${i.album}\nGenre: ${i.genre}\nProfession: ${i.profession}`;
      document.getElementById("artData").innerHTML = aD;
    }
  }
}
