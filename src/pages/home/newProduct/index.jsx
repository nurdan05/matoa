import React from 'react'
import  newProductsImage2 from '../../../assets/new-product-2.png'
import  newProductsImage1 from '../../../assets/new-product-1.png'
import './style.scss'
function NewProducts() {
    return (
       <section className="new-product">
           <div className="container">
               <div className="new-product__row row">
                   <div className="col-6 new-product__column">
                       <div className="new-product__item">
                           <h3 className="new-product__title">
                           Luxurious <span>Eyewear</span>
                           </h3>
                           <div className="new-product__desciption">
                           See the beauty of exotic world with the luxurious glasses
                           </div>
                           <a href="#" className="new-product__link">
                           Discover Now
                           </a>
                           <img className="new-product__image" src={newProductsImage1} alt=""/>
                       </div>
                   </div>
                   <div className="col-6 new-product__column">
                       <div className="new-product__item">
                           <h3 className="new-product__title">
                           Comfortable <span>Watches</span>
                           </h3>
                           <div className="new-product__desciption">
                           See the beauty of exotic world with the luxurious glasses
                           </div>
                           <a href="#" className="new-product__link">
                                Discover Now
                           </a>
                           <img className="new-product__image" src={newProductsImage2} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default NewProducts
