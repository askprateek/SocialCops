import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {
   render() {
      return (
        <div>
          <div>
            <Link to='/'><button class="btn blue">Home</button></Link>
            <Link to='match-status'><button class="btn red">Matches Won/Lost/Tied</button></Link>
            <Link to='runs-per-year'><button class="btn red">Run Scored</button></Link>
          </div>
          <div>
              {this.props.children}
          </div>
        </div>
      );
   }
}

export default Layout
