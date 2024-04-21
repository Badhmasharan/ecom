import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Offers.css";

const images = [
  "https://t4.ftcdn.net/jpg/04/40/53/53/360_F_440535312_6Xz8lGvuRQSBcE9IV6ET0BPrJ2eVNRns.jpg",
  "https://www.chenabgourmet.com/wp-content/uploads/2023/08/gourmet-grocery-offer-rs-199-only-trip-arround-the-world.jpg",
  "https://allmixedupny.com/cdn/shop/files/birkenstockbannernew-2.jpg?v=1676676792&width=3840",
];

export default function Offers() {
  return (
    <div>
      <Navbar />
      <div className="slideshow-container">
        <Slide duration={2000} transitionDuration={500}>
          {images.map((image, index) => (
            <div key={index} className="each-slide">
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            </div>
          ))}
        </Slide>
      </div>
      <div className="page-division1">
        <img src="https://www.creativehatti.com/wp-content/uploads/edd/2021/05/Special-offer-on-summer-sale-banner-design-14-large.jpg" className="small-add"></img>
        <img src="https://img.freepik.com/premium-vector/sale-with-discount-denim-clothing-advertising-poster-pale-pink-flat-illustration_98292-8168.jpg" className="small-add"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6RNgt9ioQpZH-uz2AOtmX3Y-H53wUAi-zcaSfeBtp6mZJ_IdI0LStfWua703uGwYWtg&usqp=CAU" className="small-add"></img>
      </div>
      <Footer />
    </div>
  );
}
