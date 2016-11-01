import React from 'react';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import { Link } from 'react-router';

class Layout extends React.Component {
   render() {
      return (
        <div class="row">
        <div class="col s12 l3">
            <Sidebar />
          </div>
          <div class="col s12 l9 content ">
          <div class="row">
          <div class="col s12">
          <nav class="black">
          <div class="nav-wrapper">
              <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='match-status'>Matches Won/Lost/Tied</Link></li>
                <li><Link to='runs-per-year'>Run Scored</Link></li>
                <li><Link to='performance-against'>Performance Against Various Teams</Link></li>
                <li><Link to='final-verdict'>Final Verdict</Link></li>
              </ul>
            </div>
          </nav>
          </div>
          </div>

                  <div class="row">
                    <div class=" col s12">
                    {this.props.children}
                    </div>
                  </div>
          </div>
        </div>
      );
   }
}

export default Layout
