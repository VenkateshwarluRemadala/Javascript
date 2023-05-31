let getCreate = false;
function createObjectPrototype() {
  if (getCreate===true){
    alert("It's already been added");
    return false;
  }
  else{
  addAlbum();
  addSong();
  addArtist();
  getCreate = true;
  }
  
}

function getAlbumList() {
  if (getCreate === false) {
    alert("Please add album first");
    return false;
  }
 
  
  
  else {
    for (x of albumListWithId) {
      var gsong = "";
      var gartist = "";
      for (i of x.song) {
        for (let k = 0; k < songData.length; k++) {
          if (i === songData[k].songId) {
            gsong += songData[k].songName + ", ";
          }
        }
      }
      for (i of x.artists) {
        for (let k = 0; k < artistData.length; k++) {
          if (i === artistData[k].artistId) {
            gartist += artistData[k].artistName + ", ";
          }
        }
       
      }
      let PnT = `Album: ${x.albumName}\nSongs: ${gsong}\nArtists: ${gartist}\nGenre: ${x.genre}\nReleased: ${x.year}`;
      albumList.push(PnT);
    
    }
    
    }
    createDataNames();
    document.getElementById("form1").style.visibility = "visible";
    document.getElementById("form2").style.visibility = "visible";
    document.getElementById("form3").style.visibility = "visible";
    console.log(albumList);
  }
  


function createDataNames() {
  let alb = document.getElementById("alb");
  let sog = document.getElementById("sng");
  let art = document.getElementById("art");
  for (i of albumData) {
    alb.innerHTML += "<option>" + i.albumName + "</option>";
  }
  for (i of songData) {
    sog.innerHTML += "<option>" + i.songName + "</option>";
  }
  for (i of artistData) {
    art.innerHTML += "<option>" + i.artistName + "</option>";
  }
}
