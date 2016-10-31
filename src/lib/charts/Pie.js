import React from 'react';
import * as ReactD3 from 'react-d3-components';

export default class Piechart extends React.Component{

    render() {
      const PieChart = ReactD3.PieChart;
      console.log(this.props);
      return (
        <div class="row">
        <div class="col s12 center-align">
          <h4 class= "thin">{this.props.data.label}</h4>
          <PieChart
              data={this.props.data}
              colorScale={this.props.colorScale}
              width={700}
              height={500}
              tooltipHtml={this.props.tooltipPie}
              margin={{top: 10, bottom: 10, left: -50, right: 10}}
              sort={this.props.sort}
            />
          </div>
          </div>
      );
    }
}
