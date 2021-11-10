import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function setup(reference, data)
{
  const dataX = data.map(item => item['x']);
  const dataY = data.map(item => item['y']);

  let minX = d3.min(dataX);
  let maxX = d3.max(dataX) + 10;

  let minY = d3.min(dataY);
  let maxY = d3.max(dataY) + 1;

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
              .domain([Math.min(0, minX), maxX])
              .range([ 0, width ]);
  svg.append("g")
     .attr("transform", `translate(0, ${height})`)
     .call(d3.axisBottom(x));

  const y = d3.scaleLinear()
              .domain([Math.min(0, minY), maxY])
              .range([ height, 0]);
  const yAxis =  svg.append("g")
                    .call(d3.axisLeft(y));

  return [svg, x, y, yAxis]
}

function update(data, [svg, x, y, yAxis]) {

  const color = d3.scaleOrdinal()
                  .domain([0, 1, 2 ])
                  .range([ "#0154ff", "#908dff", "#e725ff"])

  svg.append('g')
     .selectAll("dot")
     .data(data)
     .join("circle")
     .attr("cx", function (d) { return x(d['x']); } )
     .attr("cy", function (d) { return y(d['y']); } )
     .attr("r", 3)
     .style("fill", function (d) { return color(d['tag']) } )
     .attr("class", "else")
     .transition()
     .duration(1000)

}

function ScatterPlot({data}) {

  const plot = useRef(null);
  const pre_state = useRef([]);

  useEffect(() => {
    pre_state.current = setup(plot, data);
    update(data, pre_state.current)
  }, [] );

  useEffect(() => {
    const [svg]  = pre_state.current
    svg.selectAll(".else").remove();
    update(data, pre_state.current)
  }, [data] );

  return ( <div ref={plot}></div> );
}

export { ScatterPlot };
