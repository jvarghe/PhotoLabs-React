import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavourites, moreThanOneFavouriteAdded }) => {

  return (
    <div className='fav-badge'>

      {/* The Fav Icon is expecting actual (boolean) values, so I'm calling
          the two function references here, so that they pass in the values
          to the props in `FavIcon.jsx`.
      */}
      <FavIcon
        displayAlert={moreThanOneFavouriteAdded()}
        selected={hasFavourites()}
      />

    </div>
  );

};

export default FavBadge;