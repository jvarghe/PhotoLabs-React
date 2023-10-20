import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  // EXTRACT VALUES FROM PROPS
  const {
    favouritePhotosList,
    handlePhotoClick,
    handleTopicSelection,
    photos,
    topics,
    updateGlobalFavouritesList
  } = props;

  
  return (

    <div className="home-route">
      <TopNavigationBar
        favouritePhotosList={favouritePhotosList}
        handleTopicSelection={handleTopicSelection}
        topics={topics}
      />

      <PhotoList
        favouritePhotosList={favouritePhotosList}
        photos={photos}
        handlePhotoClick={handlePhotoClick}
        updateGlobalFavouritesList={updateGlobalFavouritesList}
      />
    </div>

  );

};



export default HomeRoute;
