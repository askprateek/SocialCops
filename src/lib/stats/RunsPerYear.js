import React from 'react';
import * as ReactD3 from 'react-d3-components';
import Piechart from '../charts/Pie';

export default class RunsPerYear extends React.Component{
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
    var data = {
      label: 'Total Runs scored in span of every 4 year',
      values: []
    };
    var dataset =[0,0,0,0,0,0]; var tempvalues=[];
    var yearset=[1988]; var count =0; var limit =0;
    for (var key in this.state){
      dataset[count]+=this.state[key];
      limit++;
      if (limit==4){
        limit=0;
        yearset.push(key);
        count++;
      }
    }
    // console.log(dataset,yearset);

    var key = Object.keys(this.state);
    for ( var i=0; i < yearset.length-1; i++){
      var temp={ };
      temp['y']=dataset[i];
      temp['x']=parseInt(yearset[i])+1 +" to "+ yearset[i+1];

      data.values[i]=temp;
    }
    var sort = null;
    var colorScale = d3.scale.ordinal();
    var tooltipPie = function(x,y) {
      return "Runs Scored from Year " + x + " = " + y;
    };

    return (
        <Piechart data = {data} tooltipPie={tooltipPie} sort={sort} />
    );
  }
}
