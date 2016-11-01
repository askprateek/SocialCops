import React from 'react';
import * as ReactD3 from 'react-d3-components';

export default class AreaChart extends React.Component{
    render(){
      var AreaChart = ReactD3.AreaChart;
      return(
        <div class="row">
        <div class="col s12 areachart">
        <AreaChart
              data={this.props.data}
              width={1000}
              height={400}
              margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
          </div>
        </div>
      );
    }
}
