import React from 'react'
import './home.scss'
import NewProducts from './newProduct';
import MonthlyDeals from './montlyDeals/index';
import SliderComponent from './slider/slider';
import News from './news/news';
import Series from './series';
import Reviews from './reviews';
import Instagram from './instagram';
import Footer from '../../components/footer';
import Header from './../../components/header/index';


function Home() {

    return (
        <React.Fragment>
            <main>
                <section className="hero ">
                    <div className="container hero__container">
                        <SliderComponent />
                    </div>
                </section>
                <NewProducts />
                <MonthlyDeals />
                <News />
                <Series />
                <Reviews />
                <Instagram />
            </main>
        </React.Fragment>
    )
}

export default Home
