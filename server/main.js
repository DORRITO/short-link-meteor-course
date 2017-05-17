import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

//creating and registering new middleware function
//set up http code to 302
//set location to google
//end
Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link){
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackerVisit', _id);
    } else {
      next();
    }
  });
});

  //code to run on server at startup
//   WebApp.connectHandlers.use((req, res, next) => {
//     console.log('this is from my custom middleware');
//     console.log(req.url, req.method, req.headers, req.query);
//     //Set HTTP status code
//     res.statusCode = 302;
//     //set HTTP headers
//     res.setHeader('Location', 'http://www.google.com');
//     // //Set HTTP body
//     // res.write('<h1>This is my middleware at work</h1>');
//     //end HTTP request
//     res.end();
//   });
// });
//req: request comes in
//res: run our middleware one at a time
//next: send them that page
