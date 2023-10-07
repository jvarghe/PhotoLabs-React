import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavouritePhotos }) => {

  return (
    <div className='fav-badge'>

      {/* The Fav Icon is expecting actual (boolean) values, so I'm invoking
        *  the `hasFavouritePhotos` function references here, so that they pass
        *  in the values to the props in `FavIcon.jsx`.
        */}
      <FavIcon
        displayAlert={hasFavouritePhotos()}
        selected={hasFavouritePhotos()}
      />

    </div>
  );

};

export default FavBadge;