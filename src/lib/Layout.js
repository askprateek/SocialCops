import React from 'react';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import { Link } from 'react-router';

class Layout extends React.Component {
   render() {
      return (
        <div class="row">
        <div class="col s12 m3">
            <Sidebar />
          </div>
          <div class="col s12 m8">
              <Content />
              <div>
                <div>
                  <Link to='/'><button class="btn blue">Home</button></Link>
                  <Link to='match-status'><button class="btn red">Matches Won/Lost/Tied</button></Link>
                  <Link to='runs-per-year'><button class="btn red">Run Scored</button></Link>
                  <Link to='performance-againts'><button class="btn red">Performance Against Various Teams</button></Link>
                  </div>
                  <div>
                    {this.props.children}
                  </div>
              </div>
          </div>

        </div>
      );
   }
}

export default Layout
