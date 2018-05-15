function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < 4; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr
}

function johnLennonFacts(facts) {
  let i = 0;
  var arr = [];
  while (i < 4) {
    var str = `${facts[i]}!!!`;
    arr.push(str);
    ++i
  }
  return arr
}