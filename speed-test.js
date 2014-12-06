
var hashMaker = function(hashType){
	if (hashType === "list") {
		return new ListHash();
	};
	if (hashType === "native") {
		return new NativeHash();
	};
	if (hashType === "my") {
		return new MyHash();
	};
	console.log("invalid selection - options are 'list' or 'native'")
}

var populateHash = function(hash, numKeys) {
	for (var i = 0; i < numKeys; i++) {
		hash.addKeyValuePair(i.toString(), i);
	}
}

var lookUpSpeedTest = function(hashType, numLookUps, numKeys) {
	// console.log("making a new hash");
	var hash = hashMaker(hashType);

	// console.log("\n\npopulating hash");
	populateHash(hash, numKeys);
	// console.log(hash);

	// console.log("generating look-up script");
	var script = genLookUpScript(numLookUps, numKeys);
	// console.log(script);

	// console.log("starting look-ups");

	// doLookUps() timed
	var a = new Date()
	// var name = numKeys.toString();
	// console.time(name);
	doLookUps(hash, script);
	// console.timeEnd(name);
	var b = new Date()
	return b.getTime() - a.getTime();
};

var genLookUpScript = function(numLookUps, numKeys) {
	var script = [];
	for (var i = 0; i < numLookUps; i++) {
		script.push((i % numKeys).toString());
	};
	return script;
};

var doLookUps = function(hash, lookUpScript) {
	for (var i = 0; i < lookUpScript.length; i++) {
		hash.getValueByKey(lookUpScript[i]);
	}
};

var runSpeedTests = function(hashType, numLookUps, minNumKeys, maxNumKeys, step) {
	var result = [];
	for (var i = minNumKeys; i < maxNumKeys; i += step) {
		result.push(lookUpSpeedTest(hashType, numLookUps, i))
	}
	return result;
}

// console.log(lookUpSpeedTest(listHash, 10000, 10000));
// console.log(lookUpSpeedTest(nativeHash, 1000000, 1000000));

var nativeResult = runSpeedTests("native", 10000, 1, 1000, 10);
var listResult = runSpeedTests("list", 10000, 1, 1000, 10);
var myResult = runSpeedTests("my", 10000, 1, 1000, 10);

makeHistogram(nativeResult, ".chartSTN")
makeHistogram(listResult, ".chartSTL")
makeHistogram(myResult, ".chartSTM")

console.log(nativeResult);
console.log(nativeResult.length)

console.log(listResult);
console.log(listResult.length)

console.log(myResult);
console.log(myResult.length)

