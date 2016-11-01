import React from 'react';
import * as ReactD3 from 'react-d3-components';
import Piechart from '../charts/Pie';

export default class MatchStatus extends React.Component{
  constructor(){
    super();
    const chartData = require('dsv!../../data/sachin.csv');
    this.state={
      won :0,
      lost :0,
      tied :0,
      second : { won :0, lost:0, tied:0 ,runs:0},
      first : { won :0, lost:0, tied:0 ,runs:0}
    };

    for (var i=0; i<chartData.length; i++){
      this.state[chartData[i].match_result]++;
      var bat_score= chartData[i].batting_score;
      bat_score = parseInt(bat_score.replace('*',''));
      // console.log(bat_score);
      if (!isNaN(bat_score)){
        if (chartData[i].batting_innings=='1st'){
          this.state.first[chartData[i].match_result]++;
          this.state.first.runs +=bat_score;
        }
        else{
          this.state.second[chartData[i].match_result]++;
          this.state.second.runs +=bat_score;
        }
      }
    }
    console.log(this.state.first, this.state.second);

}

  render() {
    var datafirst = {
      label: 'When Sachin was opening batmans.',
      values: [{x: 'Win', y: this.state.first['won']}, {x: 'Lost', y: this.state.first['lost']}, {x: 'Tied', y: this.state.first['tied']}]
    };
    var datasecond = {
      label: 'When Sachin played at second position.',
      values: [{x: 'Win', y: this.state.second['won']}, {x: 'Lost', y: this.state.second['lost']}, {x: 'Tied', y: this.state.second['tied']}]
    }


    var sort = null;
    var tooltipPie = function(x,y) {
      return "Matches " + x + " = " + y;
    };
    var width = 600;
    var colorScale = d3.scale.ordinal()
      .domain(["Win", "Lost", "Tied"])
      .range(["#72A0C1", "#A4C639" , "#FFAB40"]);
    return (
      <div class="row">
      <div class="col s12 m6 center-align">
        <Piechart data = {datafirst} colorScale={colorScale} tooltipPie={tooltipPie} sort={sort} width={width}/>
        <p>He scored total of {this.state.first.runs} runs when he opened for India.</p>
      </div>
      <div class= "col s12 m6 center-align">
        <Piechart data = {datasecond} colorScale={colorScale} tooltipPie={tooltipPie} sort={sort} width={width} />
        <p>He scored total of {this.state.second.runs} runs when he was at running for India.</p>
      </div>
      </div>
    );
  }
}
