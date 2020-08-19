function testJackpot(result) {
	return new Set(result).size === 1;
}

// with every function
function testJackpot(result){
        return result.every(a => a=== result[0]);
console.log(testJackpot(["@", "@", "@", "@"])); 
console.log(testJackpot(["abc", "abc", "abc", "abc"])); 
console.log(testJackpot(["SS", "SS", "SS", "SS"])); 
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); 
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); 
}