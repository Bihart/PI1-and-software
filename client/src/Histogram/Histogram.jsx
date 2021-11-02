import React, { Fragment, useRef, useEffect } from 'react';
import * as d3 from 'd3';

function drawHist(reference, data, nBin)
{
  let max = d3.max(data) + 10;
  let min = d3.min(data) - 10;

  const margin = { top: 10, right: 30, bottom: 30, left: 40},
        width = 720 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

  const svg = d3.select(reference.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                      `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
              .domain([min, max])
              .range([0, width]);

  svg.append("g")
     .attr("transform", `translate(0, ${height})`)
     .call(d3.axisBottom(x));
  const histogram = d3.bin()
                      .value((d) => d)
                      .domain(x.domain())
                      .thresholds(x.ticks(nBin));

  const bins = histogram(data);
  const y = d3.scaleLinear()
              .range([height, 0]);

  y.domain([0, d3.max(bins, function(d) { return d.length  })]);
  svg.append("g")
     .call(d3.axisLeft(y));
  svg.selectAll("rect")
     .data(bins)
     .join("rect")
     .attr("x", 1)
     .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`})
     .attr("width", function(d) { return x(d.x1) - x(d.x0) -1})
     .attr("height", function(d) { return height - y(d.length); })
     .style("fill", "#69b3a2")
}

function Histogram({data}) {

  const plot1 = useRef(null);
  const butt1 = useRef(null);

  useEffect(() => {
    let max = d3.max(data) + 10;
    let min = d3.min(data) - 10;

    const margin = { top: 10, right: 30, bottom: 30, left: 40},
          width = 720 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const svg = d3.select(plot1.current)
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform",
                        `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
                  .domain([min, max])
                  .range([0, width]);

      svg.append("g")
         .attr("transform", `translate(0, ${height})`)
         .call(d3.axisBottom(x));

    const histogram = d3.bin()
                        .value((d) => d)
                        .domain(x.domain())
                        .thresholds(x.ticks(20));

      const bins = histogram(data);
      const y = d3.scaleLinear()
                  .range([height, 0]);

    y.domain([0, d3.max(bins, function(d) { return d.length  })]);
      svg.append("g")
         .call(d3.axisLeft(y));
      svg.selectAll("rect")
         .data(bins)
         .join("rect")
         .attr("x", 1)
         .attr("transform", function(d){ return `translate(${x(d.x0)} , ${y(d.length)})`})
         .attr("width", function(d) { return x(d.x1) - x(d.x0) -1})
         .attr("height", function(d) { return height - y(d.length); })
         .style("fill", "#69b3a2")

  }, [] )

  return (
    <Fragment>
      <div ref={plot1}></div>
      <p>
        <label># bins</label>
        <input ref={butt1} type="number" min="1" max="30" step="5" value="10" id="nBin"/>
      </p>
    </Fragment>
  );
}

export { Histogram };
