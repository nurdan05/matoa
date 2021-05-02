import React from 'react'
import './style.scss'
import seriesImg1 from './../../../assets/series-1.png'
import seriesImg2 from './../../../assets/series-2.png'
import seriesImg3 from './../../../assets/series-3.png'
import seriesImg4 from './../../../assets/series-4.png'
import seriesImg5 from './../../../assets/series-5.png'
import seriesImg6 from './../../../assets/series-6.png'
import seriesImg7 from './../../../assets/series-7.png'
import seriesImg8 from './../../../assets/series-8.png'
import seriesImg9 from './../../../assets/series-9.png'
import MapleItem from './mapleItem'
import EbonyItem from './ebonyItem';
import FeaturedItem from './featuredItem';
function Series() {
    const seriesProduct = [
        {
            maple: [
                {
                    id: 1,
                    image: `${seriesImg1}`,
                    title: 'Way Kambas Maple',
                    newPrice: '1.280.000',
                },
                {
                    id: 2,
                    image: `${seriesImg2}`,
                    title: 'Kaili',
                    newPrice: '950.000',
                },
                {
                    id: 3,
                    image: `${seriesImg3}`,
                    title: 'Sunda',
                    newPrice: '1.170.000',
                }
            ]
        }, {
            ebony: [
                {
                    id: 4,
                    image: `${seriesImg4}`,
                    title: 'Tomia Ebony',
                    oldPrice: '1.280.000',
                    newPrice: '960.000',
                },
                {
                    id: 5,
                    image: `${seriesImg5}`,
                    title: 'Mori',
                    newPrice: '950.000',
                },
                {
                    id: 6,
                    image: `${seriesImg6}`,
                    title: 'Alor',
                    newPrice: '1.170.000',
                }
            ]
        },
        {
            featured: [
                {
                    id: 7,
                    image: `${seriesImg7}`,
                    title: 'Sikka (Ebony & Maple)',
                    newPrice: '1.198.000',
                },
                {
                    id: 8,
                    image: `${seriesImg8}`,
                    title: 'Lore Walnut',
                    newPrice: '1.280.000',
                },
                {
                    id: 9,
                    image: `${seriesImg9}`,
                    title: 'Way Kambas Limited Edition',
                    newPrice: '1.170.000',
                }
            ]
        }

    ]
    return (
        <section className="series">
            <div className="container">
                <div className="series__row row">
                    {seriesProduct.map(item => {
                        return <MapleItem type={item.maple} />
                        //  <EbonyItem type={item.ebony/>
                        {/* //   return    <FeaturedItem /> */ }
                    })}



                </div>
                <div className="series__btn">
                    <a href="#">See More</a>
                </div>
            </div>

        </section>
    )

}
export default Series
