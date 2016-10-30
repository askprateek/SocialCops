import React from 'react';
import * as ReactD3 from 'react-d3-components';

export default class GroupedBar extends React.Component{

  render(){
    var BarChart = ReactD3.BarChart;
    return(

        <BarChart
          data={this.props.data}
          width={1200}
          height={500}
          tooltipHtml={this.props.tooltipbar}
          margin={{top: 10, bottom: 5, left: 100, right: 10}} />
    );
  }
}
