import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
 
import { Infos } from '../api/infos.js';
 
import Info from './Info.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
 
// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    var div1 = ReactDOM.findDOMNode(this.refs.divTextInput);
    var div2 = ReactDOM.findDOMNode(this.refs.divTitleInput);

    Meteor.call('infos.insert', title, text, (err) => {
        div1.className += " has-danger";
        div2.className += " has-danger";
        
        if(err === undefined) {
          div1.className = "form-group";
          div2.className = "form-group";

          // Clear form
          textDOM.value = '';
          titleDOM.value = '';
        }else{
          ReactDOM.findDOMNode(this.refs.errorMessage).className ='has-danger';
        }
      }
    );
 
   
 
    
  }

  renderInfos() {
    return this.props.infos.map((info) => (
      <Info key={info._id} info={info} />
    ));
  }

  render() {
    return (
     
      <div className="container">
        <div className="right">
        You must be logged in to post.<br/>
        <AccountsUIWrapper /></div>
        <header>
          <h1>Havana Community notice board</h1>
        </header>

        { this.props.currentUser ?
        <div className="post-form card">
        <p>If you want to add a new piece of information for the community, please fill in 
        the form below. Press submit after filling in the title and the content.</p>
        <form className="new-info" onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group" ref="divTitleInput">
                  <input
                    type="text"
                    id="titleInput"
                    ref="titleInput"
                    placeholder="Type here to add title"
                    className="form-control"
                  />
                </div>
                <div className="form-group" ref="divTextInput">
                  <textarea
                    type="text"
                    id="textInput"
                    ref="textInput"
                    placeholder="Type here to add text"
                    className="form-control"
                    rows="3"
                  />
                </div>
                <p ref="errorMessage" className="danger">
                  Please fill in both title and text to post.
                </p>
                <input
                  type="submit"
                  ref="submitButton"
                  placeholder="Submit"
                  className="btn btn-primary"
                />
              </form>
              
        </div>
        : ''}

        <p>Here are all the current news and announcements in the Havana Community. 
        If empty, please post something (you must log in first) or come back later.</p>

        <div id="infoItems" className="row">
            {this.renderInfos()}
        </div>
      </div>
    );
  }
    
}

 
App.propTypes = {
  infos: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => {
  return {
    infos: Infos.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App);