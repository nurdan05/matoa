import React from 'react'

function FeaturedItem() {
    return (
        <div className="col-4">
        <h2 className="series__title title">Featured</h2>
            <div  className="series__item">
                <div className="series__inner">
                    <div className="series__img">
                        <img src='' alt="" />
                    </div>
                    <div className="product__info">
                        <div className="series__name">name</div>
                        <div className="series__price">Rp price</div>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default FeaturedItem
