import React from 'react'
import Item from './item'
import './style.scss';
import { useSelector } from 'react-redux';
function CartModal({ setModalActive }) {

  const modalRef = React.useRef();
  React.useEffect(() => {
    const modalWrapper = modalRef.current;
    const checkClick = (event) => {
      if (!event.path.includes(modalWrapper)) {
        setModalActive(false);
      }
    };
    document.addEventListener('click', checkClick);
    return () => {
      document.removeEventListener('click', checkClick);
    };
  }, []);

  const state = useSelector(state => state.watchesReducer.items)
  const cartProduct = Object.values(state)
  let totalWatchesPrice = cartProduct.reduce((a,b) => a + b.totalPrice,0)

  return (
    <div className="modal">
      <div ref={modalRef} className="modal__wrapper">
        {cartProduct.map(item => <Item {...item} item={item} />)}
        <div className='modal__checkout'>
          <div className='modal__left'>
            <span className='modal__promo'>Kode Promo</span>
            <input className='modal__input' type='text' placeholder='Type your Promocode' />
            <span className='modal__discount'>35% OFF</span>
          </div>
          <div className='modal__right'>
            <span className='modal__subtotal'>Subtotal</span>
            <div className='modal__total'>
              <div className='modal__total-old-price'>Rp 3.312.000</div>
              <div className='modal__total-new-price'>Rp {totalWatchesPrice}</div>
            </div>
          </div>
          <button className='modal__btn'>Checkout</button>
        </div>
      </div>

    </div>
  )
}
export default CartModal
