import React from 'react';

import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';


const App = () => {

  /* `useApplicationData()`: A CUSTOM HOOK FOR MANAGING STATE DATA WITHIN THIS APP
   *
   * `useApplicationData()` will return an object with four keys representing
   * the following function references:
   *
   *
   *   * The `state` object will contain the entire state of the application.
   *   * The `updateGlobalFavouritesList` action can be used to set the
   *     favourite photos.
   *   * The `handlePhotoClick` action can be used when the user selects a photo.
   *   * The `handleModalClose` action can be used to close the modal.
   *
   */
  const {

    state,

    // State Values
    // selectedPhoto,
    // isModalOpen,

    // Function References
    handleModalClose,
    handlePhotoClick,
    handleTopicSelection,
    updateGlobalFavouritesList

  } = useApplicationData();


  // console.log("State from App.jsx: ", state);

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
        favouritePhotosList={state.favouritePhotos}
        handlePhotoClick={handlePhotoClick}
        handleTopicSelection={handleTopicSelection}
        photos={state.photos}
        topics={state.topics}
        updateGlobalFavouritesList={updateGlobalFavouritesList}
      />

      {state.isModalOpen === true &&
        <PhotoDetailsModal
          favouritePhotosList={state.favouritePhotos}
          handleModalClose={handleModalClose}
          handlePhotoClick={handlePhotoClick}
          photoData={state.selectedPhoto}
          updateGlobalFavouritesList={updateGlobalFavouritesList}
        />
      }

    </div>

  );

};

export default App;
