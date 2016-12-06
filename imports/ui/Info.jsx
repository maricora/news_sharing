import React, { Component, PropTypes } from 'react';

// Info component - represents a single info item
export default class Info extends Component {
  render() {
    return (
      <div className="col s12">
	    <div className="card-panel teal lighten-5">
	      <div className="card-block">
	        <h4 className="card-title">{this.props.info.title}</h4>
	        <p className="card-text">{this.props.info.text}</p>
	       </div>
	    </div>
	  </div>
    );
  }
}

Info.propTypes = {
  // This component gets the info to display through a React prop.
  // We can use propTypes to indicate it is required
  info: PropTypes.object.isRequired,
};