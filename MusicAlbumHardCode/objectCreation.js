let albumListWithId = [];
let albumList = [];
let songList = [];
let artistList = [];

function addAlbum() {
  for (i of albumData) {
    const aL = new Album(
      i.albumName,
      i.albumId,
      i.song,
      i.artists,
      i.genre,
      i.year
    );
    albumListWithId.push(aL);
  }
}

function addSong() {
  for (i of songData) {
    const sG = new Song(
      i.songId,
      i.album,
      i.songName,
      i.Lyrics,
      i.Singer,
      i.musicDirector
    );
    songList.push(sG);
  }
}

function addArtist() {
  for (i of artistData) {
    const aR = new Artist(
      i.artistId,
      i.artistName,
      i.album,
      i.genre,
      i.profession
    );
    artistList.push(aR);
  }
}
