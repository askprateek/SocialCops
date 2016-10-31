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
          height={500}
          tooltipHtml={this.props.tooltipbar}
          margin={{top: 10, bottom: 5, left: 50, right: 10}} />
        </div>
        </div>
        <div class="row">
        <div class="col s12">
          <p>Sachin has scored total of {this.props.data[0].total} runs againts {this.props.data[0].label.substr(2)}. In {this.props.data[0].century} matches he scored a Century and
              in {this.props.data[0].fifty} matches he scored more than 50 runs.</p>
          </div>
        </div>
        </div>
    );
  }
}
