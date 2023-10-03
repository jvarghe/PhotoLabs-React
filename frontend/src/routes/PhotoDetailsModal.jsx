import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';

import '../styles/PhotoDetailsModal.scss';


const PhotoDetailsModal = () => {

  return (

    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">

        <img src={closeSymbol} alt="close symbol" />

      </button>
      
    </div>

  );

};


export default PhotoDetailsModal;
