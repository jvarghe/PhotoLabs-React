import React, { useState } from 'react';

import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

import '../styles/PhotoDetailsModal.scss';


const PhotoDetailsModal = (props) => {

  const {
    handleModalClose,
    photoData,
    updateGlobalFavouritesList
  } = props;


  // THIS FUNCTION WAS NECESSARY FOR MOCK DATA, BUT IS DISABLED BECAUSE IT IS
  // UNNECESSARY FOR FILES DRAWN FROM THE BACKEND API
  // (Backend API data comes in array format, so no conversion is necessary.
  // Also, Mock Data files use the key name `similarPhotos`, while backend API
  // data uses `similar_photos`).
  //
  // `photoData.similarPhotos` contains similar photos to the one being
  // currently displayed in the modal. These list of the similar photos needs
  // to be passed to `PhotoList` below, so that they can be rendered in the
  // `Similar Photos` section of the `PhotoDetailsModal`. Unfortunately, this
  // list is wrapped in an object but `PhotoList` is expecting an array. This
  // function converts the object of objects into an array of objects.
  // const convertSimilarPhotosToArrayContainer = function(photosInObjectContainer) {

  //   const arrayContainer = [];


  //   for (let photoKey in photosInObjectContainer) {

  //     arrayContainer.push(photosInObjectContainer[photoKey]);

  //   }

  //   return arrayContainer;

  // };


  // const similarPhotos = convertSimilarPhotosToArrayContainer(photoData.similarPhotos);


  return (

    <div className="photo-details-modal">


      <div className="photo-details-modal__top-bar">
        {/* This is the "X" (close) button for this modal.  */}
        <button className="photo-details-modal__close-button" onClick={handleModalClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>


      {/* THE PRIMARY CONTAINER FOR THE MODAL  */}
      <div className="photo-details-modal__images">

        {/* THE FAVOURITE BUTTON IN THE TOP-LEFT CORNER OF THE PRIMARY IMAGE */}
        <PhotoFavButton
          photoId={photoData.id}
          updateGlobalFavouritesList={updateGlobalFavouritesList}
        />

        {/* THE CONTAINER FOR THE PRIMARY IMAGE */}
        <img src={photoData.urls.full} className="photo-details-modal__image" />

        {/* The container for the photographer's details. */}
        <div className="photo-details-modal__photographer-details">

          {/* Photographer profile image. */}
          <img className="photo-details-modal__photographer-profile" src={photoData.user.profile} />

          {/* Photographer Name & Location. */}
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__photographer-info">{photoData.user.username}</p>
            <p className="photo-details-modal__photographer-location">{photoData.location.city}, {photoData.location.country}</p>
          </div>

        </div>

      </div>


      {/* THE CONTAINER FOR `SIMILAR PHOTOS` */}
      <div className="photo-details-modal__images">

        {/* THE TITLE OF THIS SECTION */}
        <h2 className="photo-details-modal__header">Similar Photos</h2>


        <PhotoList className="photo-details-modal__images"
          photoId={photoData.id}
          photos={photoData.similar_photos}
          updateGlobalFavouritesList={updateGlobalFavouritesList}
        />

      </div>


    </div>

  );

};


export default PhotoDetailsModal;
