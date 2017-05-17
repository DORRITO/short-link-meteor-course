import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;

  ///////validate///////////
  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({email})//email: email.  but im using es6 here
  ////////////////////////////////

  return true; //allows user to be created
});

//error example
// try{
//   throw new Meteor.Error(400, 'please enter a valid email');
// } catch (e) {
//   console.log(e);
// }


// code to run on server at startup

//says what property you want, and then says what it has to be. so name property, and it has to be a string
// const petSchema = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1, //length of string
//     max: 200,
//     optional: true
//   },
//   age: {
//     type: Number,
//     min: 0
//   },
//   contactNumber: {
//     type: String,
//     optional: true,
//     regEx: SimpleSchema.RegEx.Phone
//   }
// });
// petSchema.validate({
//   name: 'cat',
//   age: 3,
//   contactNumber: '113-456-1325'
// });
