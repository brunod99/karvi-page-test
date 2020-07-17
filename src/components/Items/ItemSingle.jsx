import React from 'react';
import Chevrolet from '../../../public/images/chevrolet.jpg';
import Status from '../../../public/images/status-down.svg';

const ItemSingle = () => {
  return (
    <div className="items__item">

      <img src={Chevrolet} alt="Chevrolet" className="items__item-img" />
      <h2 className="items__item-title">Chevrolet S10</h2>
      <h4 className="items__item-copy">2.4 Ls Cab. Dupla 4x2 Flex 4p</h4>
      <p className="items__item-specs">2014/2015 . 120.000 Km</p>

      <div className="items__item-price-container d-flex align-items-end">

        <h3 className="items__item-price">R$1.157.899</h3>
        <img src={Status} alt="status" className="items__item-price-status"/>
        <h6 className="items__item-price-status-copy">Bom preco</h6>

      </div>

      <p className="items__item-location">S.P. Libertade</p>

    </div>
  );
};

export default ItemSingle;
