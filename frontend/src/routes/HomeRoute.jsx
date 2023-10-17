import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  // EXTRACT VALUES FROM PROPS
  const {
    handlePhotoClick,
    handleTopicSelection,
    hasFavouritePhotos,
    photos,
    topics,
    updateGlobalFavouritesList
  } = props;

  return (

    <div className="home-route">
      <TopNavigationBar
        handleTopicSelection={handleTopicSelection}
        hasFavouritePhotos={hasFavouritePhotos}
        topics={topics}
      />

      <PhotoList
        photos={photos}
        handlePhotoClick={handlePhotoClick}
        updateGlobalFavouritesList={updateGlobalFavouritesList}
      />
    </div>

  );

};



export default HomeRoute;
