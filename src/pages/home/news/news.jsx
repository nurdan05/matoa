import React from 'react'
import newsImage1 from './../../../assets/news-1.jpg'
import './style.scss'
function News() {
    return (
        <section className="news">
            <div className="container">
                <h2 className="title">Recent News</h2>
                <div className="news__row row">
                    <div className="col-4">
                        <div className="news__text">Where To Travel</div>
                        <div className="news__suptitle">Matoa Where To Travel? Yogyakarta</div>
                        <a href="#" className="news__discover"><span>Discover</span></a>
                    </div>
                    <div className="col-8">
                        <svg className="news__rectangle" width="646" height="692" viewBox="0 0 646 692" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="101" y="38" width="640" height="458" fill="#F1DDC9" />
                            <path className="line-animation" d="M1 109L233 1L339 181L581 109L737 265" stroke="#D84727" strokeOpacity="0.61" />
                            <path className="line-animation" d="M1 156L219 51L333 249L571 156L739 329" stroke="#D84727" strokeOpacity="0.4" />
                            <path className="line-animation" d="M1 205L203 93L331 309L557 205L739 401" stroke="#D84727" strokeOpacity="0.2" />
                            <path d="M366 519L546 411L674 627L765 565" stroke="#D84727" strokeOpacity="0.4" />
                            <path d="M366 561L535 465L665 691L779 609" stroke="#D84727" strokeOpacity="0.61" />
                        </svg>
                        <figure className='news__figure'><img className="news__image" src={newsImage1} alt="" /></figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
