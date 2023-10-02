import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';


const TopNavigationBar = () => {

  return (
    <div className="top-nav-bar">

      {/* THE WEBSITE LOGO */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* THE TOPIC LIST */}
      <TopicList />

      {/* THE FAVOURITE BADGE */}
      <FavBadge />

    </div>
  );

};


export default TopNavigationBar;