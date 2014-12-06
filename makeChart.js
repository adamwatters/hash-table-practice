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