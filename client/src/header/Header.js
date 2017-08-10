import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
				header (({this.props.cat}))
      </div>
    );
  }
}

Header.propTypes = {
	cat: PropTypes.string.isRequired,
	dog: PropTypes.string.isRequired
}

export default Header;
