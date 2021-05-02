import React, {useState} from 'react'
import './style.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import watchImg1 from './../../../assets/wayKambas-1.png'
import watchImg2 from './../../../assets/wayKambas-2.png'
import watchImg3 from './../../../assets/wayKambas-3.png'
import watchImg4 from './../../../assets/wayKambas-4.png'
import watchImgShow1 from './../../../assets/wayKambas-1show.png'
import watchImgShow2 from './../../../assets/wayKambas-2show.png'
import watchImgShow3 from './../../../assets/wayKambas-3show.png'
import watchImgShow4 from './../../../assets/wayKambas-4show.png'
import watchesblokModelColor1 from './../../../assets/watchesblok-modelColor.png'
import watchesblokModelColor2 from './../../../assets/watchesblok-modelColor2.png'
function Watchesblok() {
    const [count, SetCount] = useState(1)
    const addToCart = () => {
        SetCount(count + 1)
    }
    const removeToCart = () => {
        if(count > 1 ){
            SetCount(count -1 )
        }
    }
    return (
        <section className="watchesblok">
            <div className="container watchesblok__container">
                <div className="watchesblok__row row">
                    <div className="col-6">
                        <Tabs className="row">
                            <div className="watchesblok__nav-tab">
                                <TabList className="watchesblok__tab">
                                    <Tab className="watchesblok__tab-item"><img src={watchImg1} /> </Tab>
                                    <Tab className="watchesblok__tab-item"><img src={watchImg2} /> </Tab>
                                    <Tab className="watchesblok__tab-item"><img src={watchImg3} /> </Tab>
                                    <Tab className="watchesblok__tab-item"><img src={watchImg4} /> </Tab>
                                </TabList>
                            </div>
                            <div className="watchesblok__content">
                                <TabPanel className="watchesblok__content-item">
                                    <img src={watchImgShow1} />
                                </TabPanel>
                                <TabPanel className="watchesblok__content-item">
                                    <img src={watchImgShow2} />
                                </TabPanel>
                                <TabPanel className="watchesblok__content-item">
                                    <img src={watchImgShow3} />
                                </TabPanel>
                                <TabPanel className="watchesblok__content-item">
                                    <img src={watchImgShow4} />
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                    <div className="col-6">
                        <h2 className="watchesblok__name"> WAY KAMBAS MINI EBONY</h2>
                        <span className="watchesblok__oldprice">Rp 1.280.000</span>
                        <div className="watchesblok__newprice">Rp 1.024.000</div>
                        <div className="watchesblok__model-title">Choose Model</div>
                       <div className="watchesblok__model">
                            <button className="watchesblok__model-color"><img src={watchesblokModelColor1} alt=""/> </button>
                            <button className="watchesblok__model-color"><img src={watchesblokModelColor2} alt=""/> </button>
                       </div>
                       <div className="watchesblok__row row">
                           <button onClick={removeToCart} className="watchesblok__quantity-minus">-</button>
                           <div className="watchesblok__quantity">{count}</div>
                           <button onClick={addToCart} className="watchesblok__quantity-plus">+</button>
                           <div className="watchesblok__buttons">
                        <button className="watchesblok__add-cart">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.3185 10.9521L23.7585 20.3388C23.7111 20.513 23.5593 20.6384 23.3794 20.6522L13.4145 21.4187L12.9434 22.3601H22.4935C22.7291 22.3601 22.9202 22.5512 22.9202 22.7868C22.9202 23.0225 22.7291 23.2135 22.4935 23.2135H12.2534C12.1055 23.2135 11.9682 23.137 11.8904 23.0112C11.8126 22.8854 11.8056 22.7283 11.8717 22.596L12.4221 21.4952L12.2856 21.5056L12.2534 21.5068C12.0575 21.5069 11.8866 21.3736 11.8392 21.1835L8.59504 8.16336C8.54305 7.9796 8.37513 7.8529 8.18416 7.85334H5.42667C5.19103 7.85334 5 7.66231 5 7.42667C5 7.19103 5.19103 7 5.42667 7H8.18416C8.76369 7.00089 9.27074 7.39002 9.4215 7.9496L10.0374 10.4213C10.0646 10.4161 10.0923 10.4134 10.12 10.4134H25.9069C26.0398 10.4134 26.1651 10.4754 26.2458 10.581C26.3266 10.6866 26.3534 10.8238 26.3185 10.9521ZM14.3868 15.9601C14.3868 15.7244 14.5778 15.5334 14.8135 15.5334H16.9468V13.4C16.9468 13.1644 17.1378 12.9734 17.3735 12.9734C17.6091 12.9734 17.8002 13.1644 17.8002 13.4V15.5334H19.9335C20.1692 15.5334 20.3602 15.7244 20.3602 15.9601C20.3602 16.1957 20.1692 16.3867 19.9335 16.3867H17.8002V18.5201C17.8002 18.7557 17.6091 18.9467 17.3735 18.9467C17.1378 18.9467 16.9468 18.7557 16.9468 18.5201V16.3867H14.8135C14.5778 16.3867 14.3868 16.1957 14.3868 15.9601ZM10.2473 11.2667H25.3482L23.0138 19.8243L12.5798 20.6272L10.2473 11.2667ZM13.5334 24.0668C13.0622 24.0668 12.6801 24.4489 12.6801 24.9202C12.6801 25.3915 13.0622 25.7735 13.5334 25.7735C14.0047 25.7735 14.3868 25.3915 14.3868 24.9202C14.3868 24.4489 14.0047 24.0668 13.5334 24.0668ZM20.3602 24.9202C20.3602 24.4489 20.7423 24.0668 21.2135 24.0668C21.6848 24.0668 22.0669 24.4489 22.0669 24.9202C22.0669 25.3915 21.6848 25.7735 21.2135 25.7735C20.7423 25.7735 20.3602 25.3915 20.3602 24.9202Z" fill="white" />
                            </svg>
                        Add to cart</button>
                        <button className="watchesblok__cecil">
                            <svg width="57" height="33" viewBox="0 0 57 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9517 19.921C13.5384 18.9344 11.9886 20.2055 11.9886 20.2055C9.8347 21.6359 6.95395 21.1843 5.33398 19.1622C3.71401 17.1402 3.88521 14.2098 5.72946 12.3929C7.57371 10.576 10.4872 10.4675 12.4597 12.1423C13.2256 12.6118 14.1899 12.6026 14.9469 12.1186C14.9469 12.1186 16.6522 10.6957 14.2497 8.79843H14.3204C10.6544 6.17949 5.61605 6.77102 2.64685 10.169C-0.322342 13.5669 -0.263461 18.6739 2.78328 22.0015C5.83001 25.3291 10.8806 25.8027 14.4853 23.0988C16.5392 21.2158 14.9517 19.921 14.9517 19.921Z" fill="#D84727" />
                                <path d="M40.7334 19.9209C39.3202 18.9344 37.775 20.2055 37.775 20.2055C35.6227 21.6309 32.7472 21.1776 31.1306 19.158C29.514 17.1385 29.685 14.213 31.5256 12.3982C33.3662 10.5834 36.2746 10.4726 38.2461 12.1423C39.0109 12.6098 39.9728 12.6006 40.7287 12.1186C40.7287 12.1186 42.434 10.6956 40.0315 8.79841H40.1021C36.4367 6.18582 31.4037 6.78096 28.4392 10.1776C25.4746 13.5741 25.5352 18.6761 28.5794 22.0004C31.6237 25.3248 36.6693 25.7988 40.2717 23.0988C42.3209 21.2158 40.7334 19.9209 40.7334 19.9209Z" fill="#D84727" />
                                <path d="M20.9293 5.90037C21.9543 5.90037 22.7853 4.89381 22.7853 3.65215C22.7853 2.41049 21.9543 1.40393 20.9293 1.40393C19.9042 1.40393 19.0732 2.41049 19.0732 3.65215C19.0732 4.89381 19.9042 5.90037 20.9293 5.90037Z" fill="#D84727" />
                                <path d="M22.7859 9.19684C22.7361 8.20259 21.9209 7.42218 20.9322 7.42218C19.9435 7.42218 19.1283 8.20259 19.0785 9.19684V22.6577C19.044 23.347 19.3896 23.9993 19.9773 24.3543C20.5651 24.7094 21.2993 24.7094 21.8871 24.3543C22.4748 23.9993 22.8204 23.347 22.7859 22.6577V9.19684Z" fill="#D84727" />
                                <path d="M46.8341 5.90037C47.8591 5.90037 48.6901 4.89381 48.6901 3.65215C48.6901 2.41049 47.8591 1.40393 46.8341 1.40393C45.809 1.40393 44.978 2.41049 44.978 3.65215C44.978 4.89381 45.809 5.90037 46.8341 5.90037Z" fill="#D84727" />
                                <path d="M48.6897 9.19684C48.6399 8.20259 47.8247 7.42218 46.836 7.42218C45.8473 7.42218 45.0321 8.20259 44.9823 9.19684V22.6577C44.9478 23.347 45.2934 23.9993 45.8811 24.3543C46.4689 24.7094 47.2032 24.7094 47.7909 24.3543C48.3787 23.9993 48.7242 23.347 48.6897 22.6577V9.19684Z" fill="#D84727" />
                                <path d="M56.7078 2.34308C56.7423 1.65383 56.3967 1.00153 55.809 0.646477C55.2212 0.291425 54.487 0.291425 53.8992 0.646477C53.3115 1.00153 52.9659 1.65383 53.0004 2.34308V9.19683V22.6577C52.9659 23.347 53.3115 23.9993 53.8992 24.3543C54.487 24.7094 55.2212 24.7094 55.809 24.3543C56.3967 23.9993 56.7423 23.347 56.7078 22.6577V9.19683V2.34308Z" fill="#D84727" />
                                <path d="M26.5826 27.8182C25.744 27.0213 24.3026 27.5383 24.3026 27.5383C23.4098 28.4406 22.1969 28.9477 20.932 28.9477C19.6671 28.9477 18.4543 28.4406 17.5615 27.5383C17.5615 27.5383 16.1153 27.0213 15.2768 27.8182C14.6926 28.4164 14.5541 29.3239 14.9329 30.0711C16.5106 31.6965 18.6725 32.6128 20.9297 32.6128C23.1869 32.6128 25.3488 31.6965 26.9264 30.0711C27.3099 29.3246 27.1709 28.4143 26.5826 27.8182Z" fill="#D84727" />
                            </svg>
                        </button>
                    </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Watchesblok