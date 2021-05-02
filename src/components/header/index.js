import React, { useState } from 'react'
import './header.scss'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import user from '../../assets/user.svg'
import cart from '../../assets/cart.svg'
import { NavLink } from 'react-router-dom'
import CartModal from './../cartModal/index';
import { useSelector } from 'react-redux';
const Header = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    const [modalActive, setModalActive] = React.useState(false);
    const onClickModal = () => {
        setModalActive(true);
    };
  const state = useSelector(state => state.watchesReducer.items)
  const cartProduct = Object.values(state)
  let quantityproduct = cartProduct.reduce((a,b) => a + b.count,0)
    return (
        <header className="header">
            {modalActive && <CartModal setModalActive={setModalActive} />}
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} /></NavLink>
                    </div>
                    <nav>
                        <button onClick={handleToggle} className={isActive ? "menu__btn" : 'menu__btn menu__btn--active'}>
                            <span className="menu__btn-line"></span>
                        </button>
                        <ul className={isActive ? "header__list" : 'header__list header__list--active'}>
                            <li className="header__item"><NavLink to="/watches">Watches</NavLink></li>
                            <li className="header__item"><NavLink to="/Eyewear">Eyewear</NavLink></li>
                            <li className="header__item"><NavLink to="/Accessories">Accessories</NavLink></li>
                            <li className="header__item"><NavLink to="/News">News</NavLink></li>
                            <a href="#" className="widgets__seacrh widgets__seacrh--mobile"><img src={search} /></a>
                            <a href="#" className="widgets__user widgets__user--mobile"><img src={user} /> <span>Log In</span></a>
                        </ul>
                    </nav>
                    <div className="widgets">
                        <a href="#" className="widgets__seacrh">
                            <img src={search} />
                        </a>
                        <a href="#" className="widgets__user">
                            <img src={user} /> <span>Log In</span>
                        </a>
                        <button onClick={onClickModal} className="widgets__cart">
                            <img src={cart} />
                            <span className="quantityproduct">{quantityproduct}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
