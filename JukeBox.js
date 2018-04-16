class Song{
    constructor(Artist,Genre){
      this.artist = Artist;
      this.genre = Genre;
    }
  }
  
  class JukeBox{
    constructor(storage){
      this.playing = null;
      this.storage = storage;
      this.number = 0;
      this.records = {};
    }
    add(Title,Artist,Genre){
     if (this.records[Title] !== undefined){
      throw new Error('This song is already in the system');
      }
    if (this.number < this.storage){
      if (this.records[Title] === undefined){
        this.records[Title] = new Song(Artist,Genre);
        this.number++;
        }
      } else {
        throw new Error('Their are too many songs inside of the system');
      }
    }
    remove(Title){
      if (this.records[Title]){
        delete this.records[Title];
        this.number--;
      } else {
        throw new Error('this song is not in the system');
      }
    }
    play(Title){
      if (this.records[Title]){
        this.playing = Title;
      } else {
        throw new Error('This song is not in the system');
      }
    }
  }
  
  var jukeBox = new JukeBox(10);
  jukeBox.add('Cry me a River','Justin Timberlake','Pop');
  jukeBox.add('Despacito','Justin Bieber','Pop');
  jukeBox.remove('Despacito');
  jukeBox.play('Cry me a River');
  console.log(jukeBox);