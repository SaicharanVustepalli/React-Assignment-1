function vowel2index(string) {

  var result = [];

  for(var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if(c.match(/[aeiou]/gi)) {
      result.push(i + 1);
    } else {
      result.push(c);
    }
  }
  return result.join('');
}
