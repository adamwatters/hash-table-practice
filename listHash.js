var ListHash = function() {
	this.data = [];
}

ListHash.prototype = {
	// overwrites existing key/value pair on collision
	addKeyValuePair: function(key, value) {
		this.data.push([key,value]);
		return [key,value];
	},
	// return undefined if key doesn't exist
	getValueByKey: function(key) {
		for(var i = 0; i < this.data.length; i++) {
			if (this.data[i] && this.data[i][0] === key){
				return this.data[i][1];
			}
		}
	},
	// return undefined if key doesn't exist
	removeKeyValuePair: function(key) {
		for(var i = 0; i < this.data.length; i++) {
			if (this.data[i] && this.data[i][0] === key){
				var helper = this.data[i][1];
				this.data[i][1] = undefined;
				return helper;
			}
		}
	}
};

var listHash = new ListHash();


