import React from 'react';
import Title from '../components/Title/Title';
import Filter from '../components/Filter/Filter';
import Items from '../components/Items/Items';

const UsedCars = () => {
  return (
    <main className="used-cars">
      <Title
        city="Sao Paulo"
      />

      <div className="used-cars__content container d-flex">
        <Filter />
        <Items />
      </div>
    </main>
  );
};

export default UsedCars;
