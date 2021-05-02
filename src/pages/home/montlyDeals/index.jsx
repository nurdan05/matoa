import React from 'react';
import Item from './item';
import './style.scss';

const MonthlyDeals = () => {
  return (
    <section className='montly-deals'>
      <div className='container'>
        <h3 className='title'>Monthly Deals</h3>
        <div className='row montly-deals__row'>
          <Item />
        </div>
      </div>
    </section>
  );
};

export default MonthlyDeals;
