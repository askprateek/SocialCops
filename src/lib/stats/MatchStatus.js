import React from 'react';
import * as ReactD3 from 'react-d3-components';
import Piechart from '../charts/Pie';

export default class MatchStatus extends React.Component{
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

    var data = {
      label: 'somethingA',
      values: [{x: 'Win', y: this.state['won']}, {x: 'Lost', y: this.state['lost']}, {x: 'Tied', y: this.state['tied']}]
    };
    var title='No. of Matches Win/Lost/Tied when Sachin Played';
    var sort = null;
    var tooltipPie = function(x,y) {
      return "Matches " + x + " = " + y;
    };
    var colorScale = d3.scale.ordinal()
      .domain(["Win", "Lost", "Tied"])
      .range(["#72A0C1", "#A4C639" , "#FFAB40"]);


    return (
      <Piechart title={title} data = {data} colorScale={colorScale} tooltipPie={tooltipPie} sort={sort} />
    );
  }
}
