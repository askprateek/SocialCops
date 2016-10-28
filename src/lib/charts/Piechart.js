import React from 'react';
import * as ReactD3 from 'react-d3-components';

export default class Piechart extends React.Component{
  constructor(){
    super();
    const chartData = require('dsv!../../data/sachin.csv');
    this.state={
      'won':0,
      'lost':0,
      'tied':0,
    };
    var i =0;
    for (i=0; i<chartData.length; i++){
      this.state[chartData[i].match_result]++;
    }
  }

  render() {
    const PieChart = ReactD3.PieChart;
    const data = {
      label: 'somethingA',
      values: [{x: 'Win', y: this.state['won']}, {x: 'Lost', y: this.state['lost']}, {x: 'Tied', y: this.state['tied']}]
    };

    var sort = null;
    var tooltipPie = function(x,y) {
      return "Matches " + x + " = " + y;
    };
    var colorScale = d3.scale.ordinal()
      .domain(["Win", "Lost", "Tied"])
      .range(["#72A0C1", "#A4C639" , "#FFAB40"]);


    return (
      <div id="image" class="col s12 center-align">
        <h4 className= "thin">Match Results when Sachin Played for India</h4>
        <PieChart
            data={data}
            colorScale={colorScale}
            width={600}
            height={400}
            tooltipHtml={tooltipPie}
            margin={{top: 10, bottom: 10, left: -50, right: 10}}
            sort={sort}
          />
          </div>
    );
  }
}
