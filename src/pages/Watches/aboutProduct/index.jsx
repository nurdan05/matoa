import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.scss'
import AboutProductImg1 from '../../../assets/aboutProduct-1.jpg';
import HowtoAdjustImg from '../../../assets/HowtoAdjust-1.png';
import HowtoAdjustImg2 from '../../../assets/HowtoAdjust-2.png';
import HowtoAdjustImg3 from '../../../assets/HowtoAdjust-3.png';
import HowtoAdjustImg4 from '../../../assets/HowtoAdjust-4.png';
import HowtoAdjustImg5 from '../../../assets/HowtoAdjust-5.png';
import HowtoAdjustImg6 from '../../../assets/HowtoAdjust-6.png';
import HowToKareImg1 from '../../../assets/howToKare-1.jpg'
import HowToKareImg2 from '../../../assets/howToKare-2.jpg'
import HowToKareImg3 from '../../../assets/howToKare-3.jpg'
import GalleryImg1 from '../../../assets/gallery-1.jpg'
import GalleryImg2 from '../../../assets/gallery-2.jpg'
import GalleryImg3 from '../../../assets/gallery-3.jpg'
function AboutProduct() {
    return (
        <section className="about_product">
            <div className="container">
                <Tabs>
                    <TabList className="about_product-tabs">
                        <Tab className="about_product-tab">Detail</Tab>
                        <Tab className="about_product-tab">Warranty</Tab>
                        <Tab className="about_product-tab">Custom Engrave</Tab>
                        <Tab className="about_product-tab">How to Adjust</Tab>
                        <Tab className="about_product-tab">How to Care</Tab>
                        <Tab className="about_product-tab">Gallery</Tab>
                    </TabList>

                    <div className="about_product-content">
                        <TabPanel className="about_product-item">
                            <h5 className="about_product-suptitle">Material</h5>
                            <p className="about_product-text">MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</p>
                            <h5 className="about_product-suptitle">Case</h5>
                            <p className="about_product-text">The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</p>
                            <h5 className="about_product-suptitle">Movement</h5>
                            <p className="about_product-text">For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</p>
                            <h5 className="about_product-suptitle">Dial</h5>
                            <p className="about_product-text">In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</p>
                            <h5 className="about_product-suptitle">Hand</h5>
                            <p className="about_product-text">The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</p>
                            <h5 className="about_product-suptitle">Important to Note</h5>
                            <p className="about_product-text">Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</p>
                            <img className="about_product-img" src={AboutProductImg1} alt="" />
                        </TabPanel>
                        <TabPanel className="about_product-item">
                            <h5 className="about_product-suptitle">Matoa Guarantee</h5>
                            <p className="about_product-text">Thank you for choosing MATOA and joining us in experimenting with nature.</p>
                            <p className="about_product-text">Your MATOA watch has a warranty period of 1 year after purchase through the Website, Customer Service and Stockist. Here are some things you need to know about the one year warranty from MATOA:</p>
                            <p className="about_product-text">For a 1 year warranty only applies to the movement of the body and chain warranty is valid for 6 months</p>
                            <h5 className="about_product-suptitle">Improper Use and Damage</h5>
                            <p className="about_product-text">This warranty covers defects in material or workmanship. We will also repair damage to the watch due to personal errors such as broken body due to certain cases, exposure to excessive water, damage to the engine, etc. The warranty does not apply with respect to a product that has been disassembled or repaired by a different owner or person.</p>
                            <h5 className="about_product-suptitle">Have a Valid Proof of Payment</h5>
                            <p className="about_product-text">This guarantee is effective if you include a purchase receipt or warranty card. During the warranty period, you have the right to repair your watch free of charge.</p>
                            <p className="about_product-text">If you experience any problems with your watch, please visit the 'Service Center' on our website and fill out the form. We'll call you to confirm and tell you to follow the next instructions.</p>
                        </TabPanel>
                        <TabPanel className="about_product-item">
                            <h5 className="about_product-warning">At the moment, individual engraving is under development.</h5>
                        </TabPanel>
                        <TabPanel className="about_product-item">
                            <iframe width="100%" height="540" src="https://www.youtube.com/embed/I6UC6xZ3wpA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="about_product-title">How to Adjust</div>
                            <div className="HowtoAdjust__row row">
                                <div className="col-6"><img className="about_product-img" src={HowtoAdjustImg} alt="" /></div>
                                <div className="col-6">
                                    <h5 className="about_product-suptitle">Matoa is a masterpiece of Indonesia</h5>
                                    <p className="about_product-text">A creation of youth, collaboration of art, creativity and technology which create an eco-friendly products. With 99% of local content, MATOA transforms wood into a revolutionary product that takes care the Earth. It’s us, being a human nature.</p>
                                    <h5 className="about_product-suptitle">Time Setting</h5>
                                    <ul className="about_product-list">
                                        <li className="about_product-element"> Pull the crown out</li>
                                        <li className="about_product-element">Turn the crown to set the hour and minute hands to the desired time</li>
                                        <li className="about_product-element">The small second will stop working when the crown pulled and it will <br />
                                     be working when the crown in normal position </li>
                                        <li className="about_product-element">Return the crown to beginning position</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="HowtoAdjust__row row">
                                <div className="col-6"><img className="about_product-img" src={HowtoAdjustImg2} alt="" /></div>
                                <div className="col-6">
                                    <h5 className="about_product-suptitle">Adjusting The Watch Size</h5>
                                    <ul className="about_product-list">
                                        <li className="about_product-element">  Push the pin out with a metallic pusher</li>
                                        <li className="about_product-element">Adjust your wood watch size</li>
                                        <li className="about_product-element">Return the pin to starting position</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="HowtoAdjust__row row">
                                <div className="col-3">
                                    <img className="about_product-img" src={HowtoAdjustImg3} alt="" />
                                    <p className="about_product-description">Splash resistant</p>
                                </div>
                                <div className="col-3">
                                    <img className="about_product-img" src={HowtoAdjustImg4} alt="" />
                                    <p className="about_product-description">NOT SUITABLE for heavy work environment!</p>
                                </div>
                                <div className="col-3">
                                    <img className="about_product-img" src={HowtoAdjustImg5} alt="" />
                                    <p className="about_product-description">NOT SUITABLE for water related activity!</p>
                                </div>
                                <div className="col-3">
                                    <img className="about_product-img" src={HowtoAdjustImg6} alt="" />
                                    <p className="about_product-description">KEEP OUT of direct sunlight</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="about_product-item">
                            <iframe width="100%" height="590" src="https://www.youtube.com/embed/4YtPe9hXbmI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="howtocare__row row">
                                <div className="col-6">
                                    <h2 className="about_product-title">HOW TO CARE</h2>
                                </div>
                                <div className="col-6">
                                    <h5 className="howtocare__row-suptitle">EASY STEPS TO CARE FOR YOUR MATOA WATCH</h5>
                                    <p className="about_product-text">Matoa is the pioneer brand of wooden watch in Indonesia which has been made not only to complement your appearance, but also has a functional value and authentic design for the holder. We know you want MATOA to be last as soon as you put it on your wrist. So here are a few steps to care for it.</p>
                                </div>
                            </div>
                            <div className="howtocare__row row">
                                <div className="col-6">
                                    <img src={HowToKareImg1} alt="HowToKareImg1" />
                                </div>
                                <div className="col-6">
                                    <p className="about_product-text">Unlike wooden furniture, MATOA doesn’t require any particular wood polish to emphasize the richness of brown woods. You can use olive oil (for massage) to clean your timepiece as seen on the video.</p>
                                </div>
                            </div>
                            <div className="howtocare__row row howtocare__row-order">
                                <div className="col-6">
                                    <img src={HowToKareImg2} alt="HowToKareImg2" />
                                </div>
                                <div className="col-6">
                                    <h5 className="howtocare__row-suptitle">WEAR YOUR MATOA AS OFTEN AS POSSIBLE</h5>
                                    <p className="about_product-text">By wearing MATOA every day, you’ll make your own MATOA more comfortable to use. Plus the pattern and the wood on your MATOA will be more mature and have an exclusive look.</p>
                                </div>
                            </div>
                            <div className="howtocare__row row">
                                <div className="col-6">
                                    <img src={HowToKareImg3} alt="HowToKareImg3" />
                                </div>
                                <div className="col-6">
                                    <h5 className="howtocare__row-suptitle">MATOA IS SPLASH PROOF</h5>
                                    <p className="about_product-text">Do not use your MATOA while swimming or showering. But you shouldn’t be worried to wash your hand or get splashed with water as MATOA has splash proof technology.</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="about_product-item">
                            <div className="gallery__row row">
                                <div className="col-6">
                                    <h2 className="about_product-title">#MengenalArtiCukup</h2>
                                </div>
                                <div className="col-6">
                                    <p className="about_product-text">We gathered people to share about what "enough" means to them & how they enjoy your life by living the word "enough". These are the stories submitted by them through our website or email. Thank you for your enthusiasm towards #MengenalArtiCukup campaign.</p>
                                </div>
                            </div>
                            <div className="gallery__row row">
                                <div className="col-6">
                                    <img src={GalleryImg1} alt="" />
                                </div>
                                <div className="col-6">
                                    <h5 className="about_product-suptitle gallery__title">Dhea Sekar - 20, Yogyakarta dheasekarm</h5>
                                    <p className="about_product-text">We gathered people to share about what "enough" means to them & how they enjoy your life by living the word "enough". These are the stories submitted by them through our website or email. Thank you for your enthusiasm towards #MengenalArtiCukup campaign.</p>
                                </div>
                            </div>
                            <div className="gallery__row row">
                                <div className="col-6">
                                    <img src={GalleryImg2} alt="" />
                                </div>
                                <div className="col-6">
                                    <h5 className="about_product-suptitle gallery__title">Ajeng - 25, Yogyakarta ajeng_k_dewi</h5>
                                    <p className="about_product-text">Bagi saya arti kata cukup adalah genap dan melengkapi. Cara saya untuk menikmati kata cukup iyalah dengan cara saya menutup mata dan bisa merasakan keindahan dunia tanpa harus melihatnya, seperti O2 yang dihirup, wangi bunga bermekaran, aroma nikmat masakan ibu, kicau burung di pagi hari, lembutnya tangan ibu, semua bisa saya rasakan dengan hati.</p>
                                </div>
                            </div>
                            <div className="gallery__row row">
                                <div className="col-6">
                                    <img src={GalleryImg3} alt="" />
                                </div>
                                <div className="col-6">
                                    <h5 className="about_product-suptitle gallery__title">Louise Vania - 24, Surabaya louisevania18</h5>
                                    <p className="about_product-text">CUKUP. Tidak lebih, tidak kurang. Pas, tepat sesuai takaran. Bagi saya, Cukup itu saat saya dapat membuka mata di pagi hari, dan memulai hari dengan mensyukuri bahwa saya diberi kesempatan sekali lagi untuk hidup dari Sang Pencipta, mengetahui bahwa tugas saya di dunia masih belum selesai.....</p>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default AboutProduct
