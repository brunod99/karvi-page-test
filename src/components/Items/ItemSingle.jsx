import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Chevrolet from '../../../public/images/chevrolet.jpg';
import Heart from '../../../public/images/heart.svg';
import HeartRed from '../../../public/images/heart-1.svg';

import Award from '../../../public/images/award.svg';

const ItemSingle = ({title, copy, specs, status, price, location, characteristics}) => {
  // Hooks
  const [heart, setHeart] = useState(false);

  // Handlers
  const handleClick = () => {
    setHeart(!heart);
  };

  return (
    <button className="items__item text-left" onClick={handleClick}>

      <div className="items__item-inner">

        {/* Front */}
        <div className="items__item-front">

          {/* Heart */}
          <div className="items__item-heart-container d-flex justify-content-center align-items-center">
            {
              heart ? (
                <img src={HeartRed} alt="Heart" className="items__item-heart" />
              ) : (
                <img src={Heart} alt="Heart" className="items__item-heart" />
              )
            }
          </div>

          {/* Image */}
          <div style={{
            backgroundImage: `url( ${Chevrolet} )`,
          }} alt="Chevrolet" className="items__item-img w-100"></div>

          {/* Content */}
          <div className="items__item-content">

            <h2 className="items__item-title">{title}</h2>
            <h4 className="items__item-copy">{copy}</h4>
            <p className="items__item-specs">{specs}</p>

            <div className="items__item-price-container d-flex align-items-end">

              <h3 className="items__item-price">R${price}</h3>
              <img src={status.icon} alt="status" className="items__item-price-status"/>
              <h6 className="items__item-price-status-copy">{status.copy}</h6>

            </div>

            <p className="items__item-location">{location}</p>

          </div>

        </div>

        {/* Back */}
        <div className="items__item-back">
          <div className="items__item-back-container">

            <div className="items__item-back-main-img-container d-flex justify-content-center">
              <img src={Award} alt="Trust" className="items__item-back-main-img"/>
            </div>

            <div className="items__item-back-content">
              <ul>
                {
                  characteristics.map((singleChar) => (
                    <li
                      key={singleChar.copy}
                      className="items__item-back-item d-flex align-items-center"
                    >
                      <img
                        src={singleChar.icon}
                        alt={singleChar.copy}
                        className="items__item-back-item-img"
                      />

                      <h4 className="items__item-back-item-copy">
                        {singleChar.copy}
                      </h4>

                    </li>
                  ))
                }
              </ul>
            </div>

          </div>
        </div>

      </div>

    </button>
  );
};

ItemSingle.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  specs: PropTypes.string.isRequired,
  status: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  characteristics: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  })),
};

export default ItemSingle;
