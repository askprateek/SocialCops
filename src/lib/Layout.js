import React from 'react';
import Header from './Header';
import Body from './Body';
import { Link } from 'react-router';

class Layout extends React.Component {
   render() {
      return (
        <div>
          <div>
            <Link to='barchart'><button class="btn red">Matches Won/Lost/Tied</button></Link>
            <Link to='piechart'><button class="btn red">Run Scored</button></Link>
          </div>
          <div>
              {this.props.children}
          </div>
        </div>
      );
   }
}

export default Layout
