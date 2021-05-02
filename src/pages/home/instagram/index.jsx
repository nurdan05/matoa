import React from 'react'
import instagramImage1 from '../../../assets/instagram-1.jpg'
import instagramImage2 from '../../../assets/instagram-2.jpg'
import instagramImage3 from '../../../assets/instagram-3.jpg'
import instagramImage4 from '../../../assets/instagram-4.jpg'
import instagramImage5 from '../../../assets/instagram-5.jpg'
import './style.scss'
function Instagram() {
    return (
        <section className="instagram">
        <div className="container">
            <h2 className="title">Instagram</h2>
            <div className="instagram__row row">
                <div className="instagram__item"><img src={instagramImage1} alt="" /></div>
                <div className="instagram__item"><img src={instagramImage2} alt="" /></div>
                <div className="instagram__item"><img src={instagramImage3} alt="" /></div>
                <div className="instagram__item"><img src={instagramImage4} alt="" /></div>
                <div className="instagram__item"><img src={instagramImage5} alt="" /></div>
            </div>
        </div>
    </section>
    )
}

export default Instagram
