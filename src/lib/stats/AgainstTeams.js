import React from 'react';
import * as ReactD3 from 'react-d3-components';
import GroupedBar from '../charts/GroupedBar';

export default class PerformanceAgaintsTeams extends React.Component{
  constructor(){
    super();
    this.state={ team: 'v Pakistan' };

  }
  changeTeam(el){
    // console.log(el.target.value);
    var team = el.target.value.toString();
    this.setState({team});
  }

  render() {
    const chartData = require('dsv!../../data/sachin.csv');


    var data = [{
        label: this.state.team,
        values: [],
        team : this.state.team,
        total : 0,
        fifty : 0,
        century: 0
      }];
      var y = d3.scale.linear().range[0,400];
      var allTeams=[],bat_score;
      var tooltipbar =function(x,y0,y){
        return 'Scored '+ y + status + ' on ' + x ;
      }
      for (var i =0 ; i<chartData.length; i++){
          allTeams.push(chartData[i].opposition);
          bat_score = chartData[i].batting_score;
          bat_score = parseInt(bat_score.replace('*',''));

        if ( chartData[i].opposition==this.state.team && !isNaN(bat_score) ){
          var day = chartData[i].date;
          var score = parseInt(bat_score);
          if (isNaN(score) && score.substr(-1)=='*'){
            // console.log(score.substr(0,score.length-1));
            var temp = {x: day + ' - Not Out', y : parseInt(score.substr(0,score.length-1))}
          }
          if (!isNaN(score)){
            var temp={ x: day, y : parseInt(score)};
          }
          data[0].total +=temp.y;
          if(temp.y >99){
            data[0].century++;
          }
          else if ( temp.y >49 && temp.y <100 ){
            data[0].fifty++;
          }
          data[0].values.push( temp );
        }

      }
      // console.log(data[0].total, data[0].century, data[0].fifty);
      allTeams=allTeams.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      const select = allTeams.map(function(allTeams,id){
        return <option key={id}
                  value = {allTeams}>{allTeams}</option>;
      });
      var text = `Sachin has scored total of ${data[0].total} runs against ${data[0].label.substr(2)}. In ${data[0].century} matches he scored a Century and
            in ${data[0].fifty} matches he scored more than 50 runs.`;
    return (
      <div>
      <div class="row">
        <div class="col s12 center align">
          <h3 class='thin'>Performance Analysis of Sachin against various Teams </h3>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
        <GroupedBar data={data} tooltipbar = {tooltipbar} text={text}/>
        </div>
        </div>

      <div class="row">
      <div class="col s12 m4 offset-m3 input-field">
        <select defaultvalue={this.state.team} onChange={this.changeTeam.bind(this)}>
          { select }
        </select>
        </div>
      </div>
      </div>
    );
  }
}
