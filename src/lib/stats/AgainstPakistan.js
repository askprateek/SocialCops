import React from 'react';
import * as ReactD3 from 'react-d3-components';
import GroupedBar from '../charts/GroupedBar';

export default class PerformanceAgaintsPak extends React.Component{
  constructor(){
    super();
    this.state={ team: 'v Pakistan' };
  }
  componentDidMount() {
    var axis = document.getElementsByTagName('text');
    for (var i =0; i<axis.length; i++ ){
      axis[i].setAttribute('x',-45);
    }
  }

  changeTeam(el){
    console.log(el.target.value);
    var team = 'v ' + el.target.value.toString();
    this.setState({team});
  }

  render() {
    const chartData = require('dsv!../../data/sachin.csv');


    var data = [{
        label: this.state.team,
        values: []
      }];
      var y = d3.scale.linear().range[0,400];
      var tooltipbar =function(x,y0,y){
        return 'Scored '+ y  + ' on ' + x ;
      }
      for (var i =0 ; i<chartData.length; i++){
        if ((chartData[i].opposition==this.state.team) && !isNaN(chartData[i].batting_score)){
          var day = chartData[i].date;
          var score = parseInt(chartData[i].batting_score);
          var temp={ x: day, y : score};
          data[0].values.push( temp );
        }
      }

    return (
      <div>
      <input onChange={ this.changeTeam.bind(this) }></input>
      <p>{this.state.team}</p>
      <GroupedBar data={data} tooltipbar = {tooltipbar} />
      </div>

    );
  }
}
