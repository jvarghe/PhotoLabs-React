import React, { useState } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';

import '../styles/PhotoDetailsModal.scss';


const PhotoDetailsModal = (props) => {

  const { handleModalClose } = props;


  return (

    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={handleModalClose}>

        <img src={closeSymbol} alt="close symbol" />

      </button>

    </div>

  );

};


export default PhotoDetailsModal;
