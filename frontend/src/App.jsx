import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import React from 'react';
import './App.scss';


const App = () => {

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


      <TopNavigationBar />

      <PhotoList />


    </div>
  );

};

export default App;
