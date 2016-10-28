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
    var dataset =[0,0,0,0,0,0]; var tempvalues=[];
    var yearset=[1988];
    var count =0;
    var limit =0;
    for (var key in this.state){
      dataset[count]+=this.state[key];
      limit++;
      if (limit==4){
        limit=0;
        yearset.push(key);
        count++;
      }
    }
    console.log(dataset,yearset);

    var key = Object.keys(this.state);
    for ( var i=0; i < yearset.length; i++){
      var temp={ };
      temp['y']=dataset[i];
      temp['x']=parseInt(yearset[i])+1 +" to "+ yearset[i+1];

      data.values[i]=temp;
    }
    var sort = null;
    var tooltipPie = function(x,y) {
      return "Runs Scored from Year " + x + " = " + y;
    };

    return (
      <div class="col s12 center-align">
        <h4 className= "thin">Run Scored from 1989-2012</h4>
        <PieChart
            data={data}
            width={600}
            height={500}
            tooltipHtml={tooltipPie}
            margin={{top: 10, bottom: 10, left: -50, right: 10}}
            sort={sort}
          />
        </div>
    );
  }
}
