import React from 'react';
import * as ReactD3 from 'react-d3-components';

export default class Barchart extends React.Component{
  constructor(){
    super();
    const chartData = require('dsv!../../data/sachin.csv');
    this.state={
    };
    var i =0;
    var year;
    for (i=0; i<chartData.length; i++){
      year = chartData[i].date;
      year = year.substr(-4);
      if (!isNaN(chartData[i].batting_score)){
        if (this.state[year]>-1){
          this.state[year]+=parseInt(chartData[i].batting_score);
        }
        else{
          this.state[year]=parseInt(chartData[i].batting_score);
        }

      }
    }
}

  render() {
    const PieChart = ReactD3.PieChart;
    var data = {
      label: 'Chart 2',
      values: []
    };
    var key = Object.keys(this.state);
    for ( var i=0; i < key.length; i++){
      var temp={ };
      temp['y']=this.state[key[i]];
      temp['x']=key[i];

      data.values[i]=temp;
    }
    var sort = null; 
    var tooltipPie = function(x,y) {
      return "Matches " + x + " = " + y;
    };

    return (
      <div class="col s12 center-align">
        <h4 className= "thin">Run Scored from 1990-2012</h4>
        <PieChart
            data={data}
            width={1000}
            height={800}
            tooltipHtml={tooltipPie}
            margin={{top: 10, bottom: 10, left: -50, right: 10}}
            sort={sort}
          />
        </div>
    );
  }
}
