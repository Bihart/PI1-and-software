import React, { Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function setup(reference, data)
{
  let max = d3.max(data) + 10;
  let min = d3.min(data) - 10;

  const margin = { top: 40, right: 30, bottom: 60, left: 40},
        width = 720 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

  const svg = d3.select(reference.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                      `translate(${margin.left},${margin.top})`);

  // x axis: scale and draw
  const x = d3.scaleLinear()
              .domain([min, max])
              .range([0, width]);
  svg.append("g")
     .attr("transform", `translate(0, ${height})`)
     .call(d3.axisBottom(x));

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

  // y axis: initilization
  const y = d3.scaleLinear()
              .range([height, 0]);

  const yAxis = svg.append("g");

  return [svg, height, x, y, yAxis];
}

function update(data, nBin, [svg, height, x, y, yAxis])
{
    const histogram = d3.bin()
                        .value((d) => d)
                        .domain(x.domain())
                        .thresholds(x.ticks(nBin));

    const bins = histogram(data);

    y.domain([0, d3.max(bins, function(d) { return d.length  })]);

    yAxis
      .transition()
      .duration(1000)
      .call(d3.axisLeft(y));

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

function Histogram({data}) {

  const plot1 = useRef(null);
  const needles = useRef([]);

  const [nBins, setnBins ] = useState(20);

  useEffect(() => {
    needles.current  = setup(plot1, data);
    update(data, nBins, needles.current);
  }, [] );

  useEffect(() => {
    update(data, nBins, needles.current);
  }, [data, nBins]);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    if(newValue > 100 || newValue < 1){
      setnBins(20);
    } else {
      setnBins(newValue);
    }
  }

  return (
    <Fragment>
      <div ref={plot1}></div>
      <p>
        <label># bins</label>
        <input type="number"
               min="1"
               max="20"
               step="4"
               value={nBins}
               id="nBin"
               onChange={handleOnChange}/>
      </p>
    </Fragment>
  );
}

export { Histogram };
