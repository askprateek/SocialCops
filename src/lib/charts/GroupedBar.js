import React from 'react';
import * as ReactD3 from 'react-d3-components';

export default class GroupedBar extends React.Component{

  render(){
    var BarChart = ReactD3.BarChart;
    return(
      <div class="barchart">
      <div class="row">
        <div class="col s12">
        <BarChart
          data={this.props.data}
          width={1200}
          height={400}
          tooltipHtml={this.props.tooltipbar}
          margin={{top: 10, bottom: 5, left: 50, right: 10}} />
        </div>
        </div>
        <div class="row">
        <div class="col s12">
        <p>
          {this.props.text}
          </p>
      </div>
    </div>
        </div>
    );
  }
}
