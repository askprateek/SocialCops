import React from 'react';
import Piechart from './charts/Piechart'
import Barchart from './charts/Barchart'
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
