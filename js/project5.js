function drawChart(data){
	alert("draw chart called")
	var margin = 75,
		width = 1400 - margin,
		height = 600 - margin;

	var svg = d3.select("body")
		.append("svg")
			.attr("width", width+margin)
			.attr("height", height+margin)
		.append("g")
			.attr('class','chart');

	var chart = new dimple.chart(svg,data);
	var x = chart.addTimeAxis("x","LoanOriginationDate");
	chart.addMeasureAxis("y",'BorrowerRate');
	chart.addSeries("BorrowerRate",dimple.plot.bar);
	chart.draw();
};

alert("project5.js loaded")