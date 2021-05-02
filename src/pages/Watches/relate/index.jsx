import React from 'react'
import './style.scss'
import relateImg1 from '../../../assets/deals1.jpg';
import relateImg2 from '../../../assets/relateImg-2.jpg';
import relateImg3 from '../../../assets/relateImg-3.jpg';
import relateImg4 from '../../../assets/deals1.jpg';
function Relate() {
    const relateProducts = [
        {
          id: 1,
          image: `${relateImg1}`,
          title: 'Singo Maple',
          discount: '20% OFF',
          oldPrice: '1.500.000',
          newPrice: '1.264.000',
        },
        {
          id: 2,
          image: `${relateImg2}`,
          title: 'Sikka (Ebony & Maple)',
          oldPrice: '1.500.000',
          newPrice: '1.264.000',
          new: "NEW"
        },
        {
          id: 3,
          image: `${relateImg3}`,
          title: 'Sunda',
          oldPrice: '1.500.000',
          newPrice: '1.264.000',
        },
        {
          id: 4,
          image: `${relateImg4}`,
          title: 'Singo Maple',
          oldPrice: '1.500.000',
          discount: '25% OFF',
          newPrice: '1.264.000',
        },
    ]
    return (
        <section className="relate">
            <div className="container">
                <h2 className="title">Relate Products</h2>
                <div className="relate__row row">
                    {relateProducts.map(item => {
                        return (
                            <div key={item.id} className="col-3 relate__column">
                            <div className="relate__item">
                            <span className="sale">{item.discount}</span>
                            <span className="new">{item.new}</span>
                            <img src={item.image} alt=""/>
                            <div className="relate__name">{item.title}</div>
                            <span className="relate__oldprice">Rp{item.oldPrice}</span>
                            <span className="relate__newprice">Rp{item.newPrice}</span>
                        </div>
                        </div>
                        )
                       
                    })}
                </div>
            </div>
        </section>
    )
}

export default Relate
