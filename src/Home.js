import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
           {/* Product id,product title,product review */}
           <div className="home__row">
           <Product
              id = "123456"
              Title = "This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product"
              price = {23.96}
              rating = {5}
              image = "https://edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg"   
           />
            <Product
              id = "123456"
              Title = "This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product"
              price = {23.96}
              rating = {5}
              image = "https://edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg"
           />
           </div>
           <div className="home__row2">
           <Product
              id = "123456"
              Title = "This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product"
              price = {23.96}
              rating = {5}
              image = "https://edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg"   
           />
            <Product
              id = "123456"
              Title = "This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product"
              price = {23.96}
              rating = {5}
              image = "https://edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg"
           />
            <Product
              id = "123456"
              Title = "This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product,This is a Product"
              price = {23.96}
              rating = {5}
              image = "https://www.pngkit.com/png/full/290-2902045_smart-watch.png"
           />
           </div>
           <div className="home__row3">
           <Product
              id = "123456"
              Title = "Apple iPhone 12 Pro Max has 6.7 inches (17.02 cm) display, 12 MP + 12 MP + 12 MP camera, battery"
              price = {23.96}
              rating = {5}
              image = "https://cdn.tmobile.com/images/png/products/phones/Apple-iPhone-12-Pro-Max-Gold/250x270_1.png"   
           />
           
           </div>
        
        
        </div>
      
        
       
    )
}

export default Home;