function specialReverse(s, c) {
  var words = s.split(" ");
  words.findIndex(i => {
    if (i[0] === c) {
      var newWords = i.split("").reverse().join("");
      words.splice(i[0] === c, 1, newWords, i)
    }
  })
  return words
}
console.log(specialReverse("word searches are super fun", "s"))  
console.log(specialReverse ("first man to walk on the moon", "m"))
console.log(specialReverse ("peter piper picked pickled peppers", "p"))
