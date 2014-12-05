
String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length == 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

String.prototype.myHashCode = function() {
	var hash;
	var numString = "";
	var stringCopy = this + "*****";
	for (var i = 0; i < 2; i++) {
		var lastIndex = stringCopy.charCodeAt(i).toString().length - 1;
		numString += stringCopy.charCodeAt(i).toString()[lastIndex];
	}
	var hash = parseInt(numString);
	return hash;
}

var makeRandomStrings = function(numStrings) {
	var stringArray = [];
	for (var i = 0; i < numStrings; i++){
		stringArray.push(Math.random().toString(36).substring(7));
	}
	return stringArray;
}

var realHashConvert = function(string) {
	return string.hashCode() % 50 + 50;;
}

var myHashConvert = function(string) {
	return string.myHashCode();
}

// Tests

var testStrings = makeRandomStrings(1000);

var realHashes = testStrings.map(realHashConvert);

var myHashes = testStrings.map(myHashConvert);

console.log (testStrings, realHashes, myHashes)


