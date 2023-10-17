import React, { useEffect } from 'react';
import * as d3 from 'd3';

const data = [
  { label: 'A', value: 20, innerRadius: 40, outerRadius: 75 },
  { label: 'B', value: 45, innerRadius: 45, outerRadius: 70 },
  { label: 'C', value: 35, innerRadius: 50, outerRadius: 65 },
];

const COLORS = ['#808080', '#6565de', '#dfe9f1fa'];

const Customers = () => {
  useEffect(() => {
    const parentDiv = document.getElementById('CustomerChart');
    const parentDivRect = parentDiv.getBoundingClientRect();

    const width = parentDivRect.width;
    const height = parentDivRect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    console.log(centerX)
    console.log(centerY)
    const svg = d3.select('#doughnut-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${centerX},${centerY})`);

    const arcGenerator = d3.arc();

    let startAngle = 0;

    data.forEach((entry, index) => {
      const endAngle = startAngle + (entry.value / 100) * (2 * Math.PI);

      const arc = arcGenerator({
        startAngle,
        endAngle,
        innerRadius: entry.innerRadius,
        outerRadius: entry.outerRadius,
      });

      svg.append('path')
        .attr('d', arc)
        .attr('fill', COLORS[index]);

      startAngle = endAngle;
    });

    d3.select('#doughnut-chart')
      .append('div')
      .attr('class', 'center-content')
      .style('position', 'absolute')
      .style('width', '80px')
      .style('height', '40px')
      .style('background-color', 'none')
      .style('top', `${centerY - 35}px`)
      .style('left', `${centerX - 40}px`)
      .html(`<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; text-align: center;">
      <div style="width: 100% height: 25%; font-size: 20px; font-weight: 500;">65%</div>
      <div style="width: 100% height: 25%; font-size: 12px; font-weight: 500;">Total New Customer</div></div>`);  // Set the text content
  }, []);

  return <div id="doughnut-chart" />;
};

export default Customers;
