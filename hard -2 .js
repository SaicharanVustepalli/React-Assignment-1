function numInStr(arr) {
  let newArr = []
  let re = /[0-9]/g

  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}


console.log(numInStr([1a, a, 2b, b])) //➞output [1a, 2b] 

console.log(numInStr([abc, abc10])) //➞ output [abc10]

console.log(numInStr([abc, ab10c, a10bc, bcd])) //➞output [ab10c, a10bc] 

console.log(numInStr([this is a test, test1])) //➞output [test1]