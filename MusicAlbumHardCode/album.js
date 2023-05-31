let albumData = [
  {
    albumName: "magadeera",
    albumId: 1,
    song: [11, 12, 13, 14, 15, 16],
    artists: [101, 102, 103, 104, 105, 106, 107, 108, 109],
    genre: "Film soundtrack",
    year: 2009
  },
  {
    albumName: "darling",
    albumId: 2,
    song: [21, 22, 23, 24, 25],
    artists: [201, 202, 203, 204, 205, 206, 207],
    genre: "Film soundtrack",
    year: 2016
  },
  {
    albumName: "mirchi",
    albumId: 3,
    song: [31, 32, 33, 34, 35],
    artists: [301, 302, 303, 304, 305, 306],
    genre: "Film soundtrack",
    year: 2015
  }
];
let songData = [
  {
    songId: 11,
    album: "magadeera",
    songName: "Diridiri Diridi",
    Lyrics: "Seetharama Sastry",
    Singer: "Sandeep Chowtha, Kunal Ganjawala",
    musicDirector: "Sandeep Chowtha"
  },
  {
    songId: 12,
    album: "magadeera",
    songName: "Neetho Vunte",
    Lyrics: "Seetharama Sastry",
    Singer: "Karthik",
    musicDirector: "Sandeep Chowtha"
  },
  {
    songId: 13,
    album: "magadeera",
    songName: "Aawara Hawa",
    Lyrics: "Seetharama Sastry",
    Singer: "Sowmya Raoh",
    musicDirector: "Sandeep Chowtha"
  },
  {
    songId: 14,
    album: "magadeera",
    songName: "Bad Bad Boy",
    Lyrics: "Seetharama Sastry",
    Singer: "Ranjith, Benny Dayal",
    musicDirector: "Sandeep Chowtha"
  },
  {
    songId: 15,
    album: "magadeera",
    songName: "Evvariki",
    Lyrics: "Seetharama Sastry",
    Singer: "Rahul Vaidya, Ujjaini Mukherjee",
    musicDirector: "Sandeep Chowtha"
  },
  {
    songId: 16,
    album: "magadeera",
    songName: "College Bulloda",
    Lyrics: "Chandrabose",
    Singer: "Rahul Sipligunj",
    musicDirector: "Sandeep Chowtha"
  },
  {
    songId: 21,
    album: "darling",
    songName: "Soch Na Sake",
    Lyrics: "Unknown",
    Singer: "Arijit Singh, Tulsi Kumar, Amaal Mallik",
    musicDirector: "Amaal Mallik & Ankit Tiwari"
  },
  {
    songId: 22,
    album: "darling",
    songName: "Dil Cheez Tujhe Dedi",
    Lyrics: "Unknown",
    Singer: "Ankit Tiwari, Arijit Singh",
    musicDirector: "Amaal Mallik & Ankit Tiwari"
  },
  {
    songId: 23,
    album: "darling",
    songName: "Mera Nachan Nu",
    Lyrics: "Unknown",
    Singer: "Brijesh Shandilya, Divya Kumar, Amaal Mallik",
    musicDirector: "Amaal Mallik & Ankit Tiwari"
  },
  {
    songId: 24,
    album: "darling",
    songName: "Tu Bhoola Jise",
    Lyrics: "Unknown",
    Singer: "K.K.",
    musicDirector: "Amaal Mallik & Ankit Tiwari"
  },
  {
    songId: 25,
    album: "darling",
    songName: "Soch Na Sake(Solo Version)",
    Lyrics: "Unknown",
    Singer: "Arijit Singh",
    musicDirector: "Amaal Mallik & Ankit Tiwari"
  },
  {
    songId: 31,
    album: "mirchi",
    songName: "Maari Thara Local",
    Lyrics: "Dhanush",
    Singer: "Dhanush, Anirudh Ravichander",
    musicDirector: "Anirudh Ravichander"
  },
  {
    songId: 32,
    album: "mirchi",
    songName: "Oru Vidha Aasai",
    Lyrics: "Dhanush",
    Singer: "Vineeth Sreenivasan",
    musicDirector: "Anirudh Ravichander"
  },
  {
    songId: 33,
    album: "mirchi",
    songName: "Don'u Donu'u Don'u",
    Lyrics: "Dhanush",
    Singer: "Anirudh Ravichander, Alisha Thomas",
    musicDirector: "Anirudh Ravichander"
  },
  {
    songId: 34,
    album: "mirchi",
    songName: "Bagulu Odayam Dagulu Mari",
    Lyrics: "Rokesh",
    Singer: "Dhanush",
    musicDirector: "Anirudh Ravichander"
  },
  {
    songId: 35,
    album: "mirchi",
    songName: "Thappa Dhaan Theriyum",
    Lyrics: "Vignesh Shivan",
    Singer: "Dhanush, Chinna Ponnu, Magizhini Manimaaran",
    musicDirector: "Anirudh Ravichander"
  }
];
let artistData = [
  {
    artistId: 101,
    artistName: "Sandeep Chowtha",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 102,
    artistName: "Kunal Ganjawala",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 103,
    artistName: "Karthik",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 104,
    artistName: "Sowmya Raoh",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 105,
    artistName: "Ranjith",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 106,
    artistName: "Benny Dayal",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 107,
    artistName: "Rahul Vaidya",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 108,
    artistName: "Ujjaini Mukherjee",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 109,
    artistName: "Rahul Sipligunj",
    album: "magadeera",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 201,
    artistName: "Arijit Singh",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 202,
    artistName: "Tulsi Kumar",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 203,
    artistName: "Amaal Mallik",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 204,
    artistName: "Ankit Tiwari",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 205,
    artistName: "Brijesh Shandilya",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 206,
    artistName: "Divya Kumar",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 207,
    artistName: "Krishnakumar Kunnath",
    album: "darling",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 301,
    artistName: "Dhanush",
    album: "mirchi",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 302,
    artistName: "Anirudh Ravichander",
    album: "mirchi",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 303,
    artistName: "Vineeth Sreenivasan",
    album: "mirchi",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 304,
    artistName: "Alisha Thomas",
    album: "mirchi",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 305,
    artistName: "Chinna Ponnu",
    album: "mirchi",
    genre: "Film soundtrack",
    profession: "Singer"
  },
  {
    artistId: 306,
    artistName: "Magizhini Manimaaran",
    album: "mirchi",
    genre: "Film soundtrack",
    profession: "Singer"
  }
];
