import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function setup(reference, data)
{
  const dataX = data.map(item => item['x']);
  const dataY = data.map(item => item['y']);

  let minX = d3.min(dataX);
  let maxX = d3.max(dataX);

  let minY = d3.min(dataY);
  let maxY = d3.max(dataY);

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
  svg.append("g")
     .call(d3.axisLeft(y));

  const color = d3.scaleOrdinal()
                  .domain([0, 1, 2 ])
                  .range([ "#440154ff", "#21908dff", "#fde725ff"])

  svg.append('g')
     .selectAll("dot")
     .data(data)
     .join("circle")
     .attr("cx", function (d) { return x(d['x']); } )
     .attr("cy", function (d) { return y(d['y']); } )
     .attr("r", 5)
     .style("fill", function (d) { return color(d['tag']) } )

}

function ScatterPlot({data}) {

  const myRef = useRef(null);

  useEffect(() => {
    setup(myRef, data);
  }, [data]);

   return ( <div ref={myRef}></div> )
}

export { ScatterPlot };
