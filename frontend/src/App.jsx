import React, { useState } from 'react';

import photos from "mocks/photos";
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';


const App = () => {

  // USESTATE HOOK FOR `PHOTO DETAILS MODAL`
  const [isModalOpen, setIsModalOpen] = useState(false);

  // USESTATE HOOK FOR HOLDING PHOTO DATA
  // (Passed in from `PhotoListItem` when the user clicks an image.)
  const [selectedPhoto, setSelectedPhoto] = useState();


  // This function opens `PhotoDetailsModal` when an image is clicked.
  const handlePhotoClick = function(photoData) {

    // Take data about the photo which was clicked and store it in the
    // `useState()` hook called `photoData`.
    setSelectedPhoto(photoData);

    // Then, set the state of `PhotoDataModal` open/close status to `true`.
    // When the page re-renders, this will open the sidepeek modal.
    setIsModalOpen(true);

  };


  // This function closes the `PhotoDetailsModal` when the `X` is clicked.
  const handleModalClose = function() {

    // When the modal is closed, get rid of the existing photo data.
    setSelectedPhoto(null);

    // Set the modal status to closed.
    setIsModalOpen(false);

  };



  return (

    <div className="App">

      {/* CODE SAMPLES: PASSING DATA INTO REACT COMPONENTS */}
      {/* 1 Item: Generic `PhotoListItem` Entry */}
      {/* <PhotoListItem key={sampleDataForPhotoListItem.id} photoData={sampleDataForPhotoListItem} /> */}

      {/* Multiple Item Version Using `Array.from`: Instead of creating an
      array with multiple PhotoListItem's, this creates an Array with 3 copies
      of the `PhotoListItem`, its key and photoData information from
      `sampleDataForPhotoListItem` (The last is a temporary object simulating
      a data source.) */}
      {/* {Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} photoData={sampleDataForPhotoListItem} />)} */}



      <HomeRoute
        handlePhotoClick={handlePhotoClick}
        photos={photos}
      />

      {isModalOpen === true &&
        <PhotoDetailsModal
          photoData={selectedPhoto}
          handleModalClose={handleModalClose}
        />
      }

    </div>

  );

};

export default App;
