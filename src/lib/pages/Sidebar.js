import React from 'react';

export default class sidebar extends React.Component{

  render(){
    return (
      <div>

      <ul id="slide-out" class="side-nav fixed">

      <div class="row sidebar">
        <div class="col s12">
          <img src ="http://2.bp.blogspot.com/-Z8KFf0X2Pfk/UoinDbQ0oRI/AAAAAAAAS6M/QA3CJ0NVfks/s1600/+Sachin+Tendulkar+HD+Photos+(5).jpg"></img>
        </div>
        <div class="col s12">
          <h3> <span class="thin">Sachin</span> Tendulkar</h3>
        </div>
        <div class="row">
          <div class="col s5">
          <p>Born</p>
          <p>Height</p>
          <p>Role</p>
          <p>Nicknames</p>
          </div>

          <div class="col s7 thin">
            <p>24 April 1973</p>
            <p>165cm</p>
            <p>Batsman</p>
            <p>Tendlya, <br></br> Little Master,<br></br> Master Blaster</p>
          </div>
        </div>
      </div>
      </ul>
      </div>
    );
  }
}
