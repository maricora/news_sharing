import React from 'react';
import { render } from 'react-dom';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import App from '../imports/ui/App.jsx';

//import '../imports/ui/body.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
