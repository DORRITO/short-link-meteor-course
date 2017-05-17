import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';
import FlipMove from 'react-flip-move';

import {Links} from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount linkslist');
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links'); //subscribes to the publish in links api, uses its name.
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({ links });
    });
  }
  //dont need, newest react destroys it
  // componentWillUnmount() {
  //   console.log('componentWillUnmount linkslist');
  //   this.linksTracker.stop();
  // }

  renderLinksListItems() {
    if (this.state.links.length === 0) {
      return(
        <div className="item">
          <p className="item__status-message">no links found</p>
        </div>
      )
    }

    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    })
  }

  render() {
    return(
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    )
  }
}
