import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';


const TopNavigationBar = (props) => {

  const { hasFavouritePhotos } = props;


  return (
    <div className="top-nav-bar">

      {/* THE WEBSITE LOGO */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* THE TOPIC LIST */}
      <TopicList />

      {/* THE FAVOURITE BADGE */}
      <FavBadge hasFavouritePhotos={hasFavouritePhotos} />

    </div>
  );

};


export default TopNavigationBar;