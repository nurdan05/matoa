import React from 'react'
import Slider from "react-slick";
import './style.scss'
import reviewsImage from './../../../assets/reviews-1.jpg'
const CustomPrevButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, }}
        onClick={onClick}>
           <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12H32M1 12L12 1M1 12L12 23" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
      </div>
    );
  };
const CustomNextButton = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, }}
            onClick={onClick}>
            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12H32M1 12L12 1M1 12L12 23" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    );
};
function Reviews() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />
    };
    return (
        <section className="reviews">
            <div className="container reviews__container">
                <svg className="reviews__rectangle" width="515" height="387" viewBox="0 0 515 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="87" width="515" height="300" fill="#F1DDC9" />
                    <path className="line-animation__reviews" d="M19.5 97.5L178 1L306 217L453 119" stroke="#D84727" strokeOpacity="0.6" />
                    <path className="line-animation__reviews" d="M20.5 139L167 55L297 281L460.5 159.5" stroke="#D84727" strokeOpacity="0.4" />
                    <path className="line-animation__reviews" d="M20.5 180L153 103L280 352L460.5 213.5" stroke="#D84727" strokeOpacity="0.2" />
                </svg>

                <Slider className="reviews__slider" {...settings} >
                    <div className="reviews__item">
                        <div className="row reviews__row">
                            <div className="col-6">
                                <img className="reviews__img" src={reviewsImage} alt="" />
                            </div>
                            <div className="col-6">
                                <div className="title reviews__title">Testimonials</div>
                                <div className="reviews__text">Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage. </div>
                                <div className="reviews__name">Gita Savitri</div>
                                <div className="reviews__creator">Content Creator/Influencer</div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__item">
                        <div className="row reviews__row">
                            <div className="col-6">
                                <img className="reviews__img" src={reviewsImage} alt="" />
                            </div>
                            <div className="col-6">
                                <h3 className="title reviews__title">Testimonials</h3>
                                <div className="reviews__text">Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage. </div>
                                <div className="reviews__name">Gita Savitri</div>
                                <div className="reviews__creator">Content Creator/Influencer</div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Reviews
