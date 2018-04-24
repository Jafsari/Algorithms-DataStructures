const ransomNote = (magazine,note) => {
    let freq1 = {};
    let freq2 = {};
    magazine = magazine.split(' ');
    note = note.split(' ');
    for (let i = 0; i < magazine.length; i++){
      if (freq1[magazine[i]]){
        freq1[magazine[i]]++;
      } else {
        freq1[magazine[i]] = 1;
      }
    }
    for (let j = 0; j < note.length ; j++){
      if (freq2[note[j]]){
        freq2[note[j]]++;
      } else {
        freq2[note[j]] = 1;
      }
    }
    
    for (let key in freq2){
      if (key in freq1){
        if (freq1[key] < freq2[key]){
          return false;
        } else {
          freq1[key]--;
        }
      } else {
        return false;
      }
    }
    return true;
  };
  ransomNote('give me one grand today night','give one grand today');