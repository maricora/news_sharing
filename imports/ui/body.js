import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  articles: [
    { title: 'Title 1', text: 'This is article 1', image: '' },
    { title: 'Title 2', text: 'This is article 2', image: ''},
    { title: 'Title 3', text: 'This is article 3', image: '' },
    { title: 'Title 4', text: 'This is article 4', image: '' },
    { title: 'Title 5', text: 'This is article 5', image: '' },
    { title: 'Title 6', text: 'This is article 6', image: ''  },
  ],
});