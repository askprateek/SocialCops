import React from 'react';
import GroupedBar from '../charts/GroupedBar';

export default class Home extends React.Component{
  constructor(){
    super();
    const chartData = require('dsv!../../data/sachin.csv');
    var total_runs=0,wickets=0,fifties=0,eighty=0,century=0,matches=0,temp,year;
    var avgData = {};
    for ( var i=0; i<chartData.length; i++ ){
      // Total Runs
      temp = chartData[i].batting_score;
      temp = temp.replace('*','');
      if ( !isNaN(temp) ){
        matches+=1;
        total_runs+=parseInt(temp);
        temp = parseInt(temp);
        if (temp >99){
          century+=1;  // 100 Plus in one match
        }
        else if( temp >79 && temp <100){
          eighty+=1;
        }
        else if (temp>49 && temp<100 ){
          fifties+=1;  // 50+ In One match
          // console.log(total_runs);
        }

        // Average Per Year Data
        year = chartData[i].date.substr(-4);
        // console.log(year);
        if(!avgData[year]){
          avgData[year] = [temp,1];
          // console.log(avgData[year]);
        }
        else{
          avgData[year][0]+=temp;
          avgData[year][1]++;
        }
      }


      // wickets
      if (!isNaN(chartData[i].wickets)){
        wickets+=parseInt(chartData[i].wickets);
      }
    }
    var data = [{
        label: 'Average Score Per Year',
        values: [],
      }];
      var avg;
      for ( var key in avgData){
        avg = parseInt(avgData[key][0]/avgData[key][1]);
        if (isNaN(avg)){
          avg = 0;
        }
        data[0].values.push({x:key, y :avg});
      }
      var tooltipHome = function(x,y0,y){
        return 'Year '+ x + ' Avg:' +y;
      }
      // console.log(data[0].values);
    this.state={
      total_runs: total_runs,
      century : century,
      eighty : eighty,
      fifties : fifties,
      wickets : wickets,
      avg : (total_runs/matches).toFixed(2),
      data : data,
      tooltipHome : tooltipHome
    }
  }

  render(){
    return (
      <div class="row">
        <div class="col s12">
        <div class="row">
          <div class="col s12">

          <p><b>Sachin Ramesh Tendulkar</b> is a former Indian cricketer and captain,
          <b>widely regarded as the greatest batsman of all time</b>. He took up cricket at the age of eleven,
          made his Test debut on 15 November 1989 against Pakistan in Karachi at the age of sixteen,
          and went on to represent Mumbai domestically and India internationally for close to twenty-four years.
          He is the only player to have scored one hundred international centuries,
          the first batsman to score a double century in a One Day International,
          the holder of the record for the number of runs in both ODI and Test cricket,
          and the only player to complete more than 30,000 runs in international cricket.
          </p>
        </div>
        </div>

        <div class="row">
          <div class="col s12">
            <p>According to the ODI data we have, Sachin made {this.state.total_runs} runs with an average of {this.state.avg} in his career. He scored Century in {this.state.century} innings and Fifties in {this.state.fifties} innings.
              He played {this.state.eighty} innings in which he score between 80-100. He also took {this.state.wickets} wickets in his One Day career.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <GroupedBar data = {this.state.data} tooltipbar = {this.state.tooltipHome} />
            </div>
        </div>
        </div>
      </div>
    );
  }
}
