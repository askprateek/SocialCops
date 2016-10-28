import React from 'react';
import MatchStatus from './charts/MatchStatus';
import RunsPerYear from './charts/RunsPerYear';
import Piechart from './charts/Pie';

export default class Body extends React.Component {
  handleChange(e){
    const body_text = e.target.value;
    console.log(body_text);
    this.props.changeContent(body_text);
  }

  render(){

    return (
      <div className='container'>
        <div className="row">
          <Piechart />
        </div>
      </div>
    );
  }
}
