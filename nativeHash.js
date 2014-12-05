var NativeHash = function() {
	this.dictionary = {};
}

NativeHash.prototype = {
	// overwrites existing key/value pair on collision
	addKeyValuePair: function(key, value) {
		this.dictionary[key] = value;
		return value;
	},
	// return undefined if key doesn't exist
	getValueByKey: function(key) {
		return this.dictionary[key];
	},
	// return undefined if key doesn't exist
	removeKeyValuePair: function(key) {
		var helper = this.dictionary[key];
		this.dictionary[key] = undefined;
		return helper;
	}
};

var nativeHash = new NativeHash();


