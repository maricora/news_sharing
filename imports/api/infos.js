import { Mongo } from 'meteor/mongo';
 
export const Infos = new Mongo.Collection('infos');


Meteor.methods({
  'infos.insert'(title, text) {
    
    // Make sure the user is logged in before inserting a info
    if (title.length > 0 && text.length > 0) {
      Infos.insert({
	      title,
	      text,
	      createdAt: new Date()      
	    });

    }else{

	     throw new Meteor.Error('not-authorized');
	}

  },
});