import { React } from 'react';

import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

import ModalMainImage from 'components/ModalMainImage';

import '../styles/PhotoDetailsModal.scss';


const PhotoDetailsModal = (props) => {

  const {
    handleModalClose,
    handlePhotoClick,
    photoData,
    updateGlobalFavouritesList
  } = props;

  console.log("PhotoDetailsModal: ", photoData, photoData.similar_photos);


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


      {/* THE CLOSE BUTTON BAR AT THE TOP OF THE MODAL */}
      <div className="photo-details-modal__top-bar">
        {/* This is the "X" (close) button for this modal.  */}
        <button className="photo-details-modal__close-button" onClick={handleModalClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>


      {/* THE CONTAINER FOR THE PRIMARY IMAGE SECTION */}
      <div className="photo-details-modal__image">

        <ModalMainImage
          photoData={photoData}
          updateGlobalFavouritesList={updateGlobalFavouritesList}
        />

      </div>


      {/* THE CONTAINER FOR THE `SIMILAR PHOTOS` SECTION */}
      <div className="photo-details-modal__images">

        {/* THE TITLE OF THIS SECTION */}
        <h2 className="photo-details-modal__header">Similar Photos</h2>


        <PhotoList

          // The `similar_photos` property of `photoData` object is being
          // passed in here. As in the previous container, `photos` is expecting
          // an array. but `similar_photos` is already wrapped in an array.
          // It doesn't need to be wrapped in `[]` unlike in the primary
          // container.
          photos={photoData.similar_photos}

          // The `handlePhotoClick()` function is supposed to open the modal
          // view. But if it's already open, we don't want to open it again.
          // We are passing in a function reference because `PhotoList` is
          // expecting one, but the `handlePhotoClick()` function definition
          // handles this case by ignoring it (`useApplicationData.jsx`).
          handlePhotoClick={handlePhotoClick}
          updateGlobalFavouritesList={updateGlobalFavouritesList}

        />

      </div>


    </div>

  );

};


export default PhotoDetailsModal;
