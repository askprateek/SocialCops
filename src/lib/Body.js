import React from 'react';
import Piechart from './charts/Piechart'
export default class Body extends React.Component {
  handleChange(e){
    const body_text = e.target.value;
    console.log(body_text);
    this.props.changeContent(body_text);
  }

  render(){

    return (
      <div className='container'>
        <input onChange = {this.handleChange.bind(this)} />
        <h1 className='thin'>Hello,my name is {this.props.body_text}</h1>
        <Piechart />
      </div>
    );
  }
}
