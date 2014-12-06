var MyHash = function() {
	this.table = [];
}

MyHash.prototype = {
	// overwrites existing key/value pair on collision
	addKeyValuePair: function(key, value) {
		var keyCode = myHashConvert(key);
		if (!this.table[keyCode]) {
			this.table[keyCode] = [];
		} else {
			for(var i = 0; i < this.table[keyCode].length; i++) {
				if(this.table[keyCode][i].key === key){
					this.table[keyCode][i].value = value;
					return value;
				}
			}
		}
		this.table[keyCode].push({key: key, value: value});
		return value;
	},
	// return undefined if key doesn't exist
	getValueByKey: function(key) {
		var keyCode = myHashConvert(key);
		if (this.table[keyCode]){
			for(var i = 0; i < this.table[keyCode].length; i++) {
				if(this.table[keyCode][i].key === key){
					return this.table[keyCode][i].value;
				}
			}
		};
		return undefined;
	},
	// return undefined if key doesn't exist
	removeKeyValuePair: function(key) {
		var keyCode = myHashConvert(key);
		var helper = this.dictionary[keyCode][0].value;
		this.dictionary[keyCode][0] = undefined;
		return helper;
	}
};

var myHash = new MyHash();