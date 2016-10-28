import React from 'react';
import Header from './Header';
import Body from './Body';

class Layout extends React.Component {
  constructor(){
    super();
    this.state = {body_text: ""};
  }
  changeContent(body_text){
    this.setState( {body_text});
  }
   render() {
      return (
        <div>
          <Body changeContent= {this.changeContent.bind(this)} body_text={this.state.body_text}/>
        </div>
      );
   }
}

export default Layout
