import React from 'react';
import Title from '../components/Title/Title';
import Filter from '../components/Filter/Filter';
import '../styles/UsedCars.scss';

const UsedCars = () => {
  return (
    <main className="used-cars">
      <Title
        city="Sao Paulo"
      />

      <div className="used-cars__content container">
        <Filter />
      </div>
    </main>
  );
};

export default UsedCars;
