import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  const [visible, setVisibility] = useState(false)
  const [info, setInfo] = useState('')

  useEffect(() => {

    d3.select(barChart.current).html('')

    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);
     

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars.enter().append("rect").attr("class", "bar").style("fill", "steelblue")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.stock))
    .attr("height", d => iheight - y(d.stock))
    .attr("width", x.bandwidth())

    .on('mouseover', async (info, event)=>{
      let xp = info.clientX-10
      let yp = info.pageY-35
      d3.select('#tp').style('left', xp+'px')
      .style('top', yp+'px')
      setVisibility(true)
      setInfo(event.name)
      
    })

    .on('mouseout', async(info, event)=>{
      await new Promise(element => setTimeout(element, 700));
      setVisibility(false)
    })

    

    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));

    //let tooltip = d3.tip()
  }, [data]);

  return (
    <>
    <div id='tp' className={(visible ? 'absolute':'hidden')}>{info}</div>
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
    </>
    
  );
};
