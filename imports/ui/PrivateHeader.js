import React from 'react';
import PropTypes from 'prop-types';

import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = (props) => {  //const instead of export default because name is being used in PropTypes
    return(
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{props.title}</h1>
          <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
        </div>
      </div>
    );
}

// export default class PrivateHeader extends React.Component{
//   /////////////////////
//   onLogout() {
//     Accounts.logout();
//   }///////////////////
//
//   render(){
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }
/////////////////////////////////////////
PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PrivateHeader;
