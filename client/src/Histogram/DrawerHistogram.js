import * as d3 from 'd3';

function setup(reference, data)
{
  const margin = { top: 40, right: 30, bottom: 60, left: 40},
        width = 720 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

  const svg = d3.select(reference.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "bg-gray-100")
                .append("g")
                .attr("transform",
                      `translate(${margin.left},${margin.top})`);

  // svg.append("rect")
  //    .attr("width", "100%")
  //    .attr("height", "100%")
  //    .attr("fill", "WhiteSmoke");


  // x axis: initilization
  const x = d3.scaleLinear()
              .range([0, width]);

  const xAxis = svg.append("g")
                   .attr("transform", `translate(0, ${height + 1})`)

  // y axis: initilization
  const y = d3.scaleLinear()
              .range([height, 0]);

  const yAxis = svg.append("g");

  svg.append("text")
     .attr("class", "x label")
     .attr("text-anchor", "end")
     .attr("x", width / 2)
     .attr("y", height + 40)
     .text("Precio de sensores");

  svg.append("text")
     .attr("class", "title label")
     .attr("text-anchor", "end")
     .attr("x", width / 2)
     .attr("y", - 10)
     .text("Histograma");

  svg.append("text")
     .attr("class", "y label")
     .attr("text-anchor", "end")
     .attr("y", - 39)
     .attr("dy", ".75em")
     .attr("transform", "rotate(-90)")
     .text("Número de sensores");

  return [svg, height, x, y, yAxis, xAxis];
}

function update(data, nBin, [svg, height, x, y, yAxis, xAxis])
{
  const max = Math.max(...data) + 10;
  const min = Math.min(...data) - 10;

  const histogram = d3.bin()
                      .value((d) => d)
                      .domain(x.domain())
                      .thresholds(x.ticks(nBin));

  const bins = histogram(data);

  x.domain([min, max])
  y.domain([0, d3.max(bins, function(d) { return d.length  })]);

  yAxis
    .transition()
    .duration(1000)
    .call(d3.axisLeft(y));

  xAxis
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x));

  const u = svg.selectAll("rect")
               .data(bins);

  u.join("rect")
   .transition()
   .duration(1000)
   .attr("x", 1)
   .attr("transform", function(d) { return `translate(${x(d.x0)}, ${y(d.length)})`})
   .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
   .attr("height", function(d) { return height - y(d.length); })
   .style("fill", "#69b3a2")
}

export { setup, update };
