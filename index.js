function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr
}

function johnLennonFacts(facts) {
  let i = 0;
  var arr = [];
  while (i < facts.length) {
    var str = `${facts[i]}!!!`;
    arr.push(str);
    ++i
  }
  return arr
}