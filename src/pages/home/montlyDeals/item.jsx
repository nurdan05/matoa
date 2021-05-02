import React from 'react';
import deals1Image1 from '../../../assets/deals1.jpg';
import deals1Image2 from '../../../assets/deals2.jpg';
import deals1Image3 from '../../../assets/deals3.jpg';
import deals1Image4 from '../../../assets/deals4.jpg';
import { useDispatch, useSelector } from 'react-redux';
import WatchesAction from '../../../redux/actions/watchesAction';
const Item = () => {
  const dispatch = useDispatch();
  const watches = [
    {
      id: 1,
      image: `${deals1Image1}`,
      title: 'Singo Maple',
      discount: 10,
      oldPrice: 112000,
      newPrice: 112000,
    },
    {
      id: 2,
      image: `${deals1Image2}`,
      title: 'Singo Ebony',
      discount: 20,
      oldPrice: 1500000,
      newPrice: 1264000,
    },
    {
      id: 3,
      image: `${deals1Image3}`,
      title: 'Singo Maple',
      discount: 10,
      oldPrice: 12000,
      newPrice: 112000,
    },
    {
      id: 4,
      image: `${deals1Image4}`,
      title: 'Singo Maple',
      discount: 10,
      oldPrice: 112000,
      newPrice: 112000,
    },
  ];
  const roman = (item) => {
    dispatch(WatchesAction(item));
  };
  return (
    <React.Fragment>
      {watches.map((item) => {
        return (
          <div key={item.id} className='col-3 montly-deals__column'>
            <div className='montly-deals__item'>
              <img className='montly-deals__image' src={item.image} alt='watch-1' />
              <h5 className='montly-deals__title'>{item.title}</h5>
              <span className='montly-deals__discount'>{item.discount}% Off</span>
              <span className='montly-deals__old-price'>Rp {item.oldPrice}</span>
              <h5 className='montly-deals__new-price'>Rp {item.newPrice}</h5>
              <div className='montly-deals__hidden'>
                <button className="montly-deals__like">
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12.0036 5.6792C12.9066 4.6216 14.6428 3 16.8 3C19.9103 3 22 5.25056 22 8.6C22 14.574 12.9772 20.7803 12.4636 21.1336L12.4536 21.1405L11.9976 21.4L11.5432 21.0838C11.5381 21.0802 11.5316 21.0757 11.5237 21.0702C10.9177 20.6504 2 14.4725 2 8.6C2 5.25056 4.08968 3 7.2 3C9.37992 3 11.1073 4.62008 12.0036 5.6792ZM2.79997 8.59997C2.79997 14.2 12 20.427 12 20.427V20.4271C12 20.4271 21.2 14.2668 21.2 8.59997C21.2 5.79997 19.6 3.79997 16.8 3.79997C14.0666 3.79997 12 6.99997 12 6.99997C12 6.99997 9.96661 3.79997 7.19997 3.79997C4.39997 3.79997 2.79997 5.79997 2.79997 8.59997Z'
                      fill='#D84727'
                    />
                  </svg>
                </button>
                <button  onClick={() => roman(item)} className="montly-deals__add-cart">Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Item;
