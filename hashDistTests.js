
var getDistribution = function(hashCodes) {
	var distribution = []
	for (var i = 0; i < 100; i++) {
		distribution[i] = 0;
	}
	for (var i = 0; i < hashCodes.length; i++){
		distribution[hashCodes[i]] ++;
	}
	return distribution;
}

var realHashDist = getDistribution(realHashes);
var myHashDist = getDistribution(myHashes);

console.log(realHashDist, myHashDist);

var makeHistogram = function(data, target) {

	var width = 420,
	    barHeight = 6;

	var x = d3.scale.linear()
	    .domain([0, d3.max(data)])
	    .range([0, width]);

	var chart = d3.select(target)
	    .attr("width", width)
	    .attr("height", barHeight * data.length);

	var bar = chart.selectAll("g")
	    .data(data)
	  .enter().append("g")
	    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

	bar.append("rect")
	    .attr("width", x)
	    .attr("height", barHeight - 1);

}

makeHistogram(realHashDist, ".chartSE")
makeHistogram(myHashDist, ".chartMine")

