function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < 4; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr
}

