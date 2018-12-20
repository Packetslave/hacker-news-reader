import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

class List extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  getFilteredStories = () => {
    const { stories } = this.props;

    return stories.filter(story => {
      if (story.type === "story" &&
          story.title.includes("Facebook") &&
          !story.url.includes("fb.com")) {
        return false;
      }
      return true;
    }).map(story => (
      <ListItem key={story.id} {...story} />
    ));
  };

  render() {
    return (
      <ListWrapper>
        {this.getFilteredStories()}
      </ListWrapper>
    );
  }
}

export default List;
