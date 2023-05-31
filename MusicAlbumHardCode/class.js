class Album {
  constructor(aName, aId, asong, aArtist, aGenre, aYear) {
    this.albumName = aName;
    this.albumId = aId;
    this.song = asong;
    this.artists = aArtist;
    this.genre = aGenre;
    this.year = aYear;
  }
}
  


class Song {
  constructor(songId, album, songName, Lyrics, Singer, musicDirector) {
    this.songId = songId;
    this.album = album;
    this.songName = songName;
    this.Lyrics = Lyrics;
    this.Singer = Singer;
    this.musicDirector = musicDirector;
  }
 
}

class Artist {
  constructor(artistId, artistName, album, genre, profession) {
    this.artistId = artistId;
    this.artistName = artistName;
    this.album = album;
    this.genre = genre;
    this.profession = profession;
  }
  
}
  