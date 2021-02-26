import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="90829396"
            title="Dell UltraSharp U3415W 34-Inch Curved LED-Lit Monitor"
            price={590}
            rating={4}
            image="https://m.media-amazon.com/images/I/71br6lyzhuL._AC_UY218_.jpg"
          />
          <Product
            id="23445903"
            title="CanMixs Smart Watch for Android Phones iOS Waterproof Smart Watches for Women Men "
            price={33.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71nudiW6rBL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903855"
            title="NUBWO Portable Bluetooth Speaker with Enhanced Bass and Stereo Sound..."
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XCYPCZBhL._AC_UY218_.jpg"
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater."
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />

          <Product
            id="3254354365"
            title="Lorell Soho High-Back Leather Executive Chair, Black"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71c5l0YARGL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903853"
            title="Bopmen T3 Wired Over Ear Headphones,"
            price={17.71}
            rating={5}
            image="https://m.media-amazon.com/images/I/51JgVRxaT3L._AC_UL320_.jpg"
          />

          <Product
            id="3254354354"
            title="Char-Broil Classic 360 3-Burner Liquid Propane Gas Grill"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81riNz4wRFL._AC_UL320_.jpg"
          />

          <Product
            id="3254354347"
            title="Tablet 10 Inch Android 9.0 3G Phone Tablets with 32GB Storage Dual Sim Card 5MP Camera"
            price={106.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903817"
            title="WiFi Smart Table Lamp for Bedrooms"
            price={38.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51XdQCl4Z2L._AC_UL320_.jpg"
          />

          <Product
            id="23445909"
            title="Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision,"
            price={25.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
          />

          <Product
            id="3254354345"
            title="Ultimate Collection Meena Kumari 3 DVD Set [NTSC] "
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51eQOC6oa7L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor "
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

      </div>
    </div>
  )
}

export default Home






