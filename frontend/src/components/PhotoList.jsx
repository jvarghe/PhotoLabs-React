import React from "react";

import "../styles/PhotoList.scss";

import PhotoListItem from "./PhotoListItem";


// An Array of Objects Simulating a Data Source
//
// const sampleDataForPhotoList = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     },
//     user: {
//       id: "1",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "2",
//     location: {
//       city: "Toronto",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
//     },
//     user: {
//       id: "2",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
//   {
//     id: "3",
//     location: {
//       city: "Ottawa",
//       country: "Canada",
//     },
//     urls: {
//       full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//       regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
//     },
//     user: {
//       id: "3",
//       username: "exampleuser",
//       name: "Joe Example",
//       profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//     },
//   },
// ];


const PhotoList = (props) => {

  // EXTRACT VALUES FROM PROPS
  const {
    favouritePhotosList,
    updateGlobalFavouritesList,
    handlePhotoClick,
    photos,
  } = props;


  return (

    <ul className="photo-list">

      {/* Iterate over the data source, and generate `PhotoListItem` templates
          for each photo. These templates will be passed `key` and `photoData`
          values so that the `PhotoListItem` can be populated.
      */}
      {photos.map((photo) => (

        <PhotoListItem

          key={photo.id}

          favouritePhotosList={favouritePhotosList}
          photo={photo}
          handlePhotoClick={handlePhotoClick}
          updateGlobalFavouritesList={updateGlobalFavouritesList}

        />

      ))}

    </ul>
  );

};


export default PhotoList;
