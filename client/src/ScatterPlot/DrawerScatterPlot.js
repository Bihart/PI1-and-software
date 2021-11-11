import * as d3 from 'd3';

function setup(data, reference)
{
  const dataY = data.map(item => item['y']);
  const minY = d3.min(dataY);
  const maxY = d3.max(dataY) + 1;

  const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 720 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select(reference.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                      `translate(${margin.left}, ${margin.top})`);

  const x = d3.scaleLinear()
              .range([ 0, width ]);

  const xAxis = svg.append("g")
                   .attr("transform", `translate(0, ${height})`)

  const y = d3.scaleLinear()
              .domain([Math.min(0, minY), maxY])
              .range([ height, 0]);

  svg.append("g")
     .call(d3.axisLeft(y));

  return [svg, x, y, xAxis]
}

function update(data, [svg, x, y, xAxis], listOfTags, listEachColorByTag) {

  const dataX = data.map(item => item['x']);

  const minX = d3.min(dataX);
  const maxX = d3.max(dataX) + 10;

  svg.selectAll(".else").remove();
  const color = d3.scaleOrdinal()
                  .domain([...listOfTags])
                  .range([...listEachColorByTag])

  x.domain([Math.min(0, minX), maxX])

  xAxis
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x));

  const u =  svg.append('g')
                .selectAll("dot")
                .data(data)
  u.join("circle")
   .transition()
   .duration(1000)
   .attr("cx", function (d) { return x(d['x']); } )
   .attr("cy", function
         (d) { return y(d['y']); } )
   .attr("r", 3)
   .style("fill", function (d) { return color(d['tag']) } )
   .attr("class", "else")
}

export { setup, update };
