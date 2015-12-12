var names = ["Jump", "Olivia", "Alex"];
var complement = " is awesome!";

var complementGiver = function(array, phrase){
	var completed = [];
	for(var i = 0; i<array.length; i+=1){
		completed.push(array[i] + phrase)
	}
		return completed;
}

console.log(complementGiver(names, complement))