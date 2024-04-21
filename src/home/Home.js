import React from 'react';
import './Home.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Link, useNavigate } from "react-router-dom";
const Home=()=> {
  
  
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className='header4'>
          <div>
            <img src="https://i.ytimg.com/vi/AFFdD-T3gjI/maxresdefault.jpg"  className='advertise'></img>
          </div>
        </div>
        <div className='body1'>
          
          <div className='boxx'>
            <div className='box1'>
              <h2 className='text'>Deals in PCs</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" className='pc'></img>
              <Link to="/pc"><h3 className='shopnow'>Shop now</h3></Link>
            </div>
            <div className='boxX2'>
              <h2 className='text'>Gifts for your loved</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" className='pc'></img>
              <Link to="/gift"><h3 className='shopnow'>Shop now</h3></Link>
            </div>
            <div className='box3'>
              <h2 className='text'>Furnitures under $80</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg" className='pc'></img>
              <Link to="/kitchen"><h3 className='shopnow'> Shop now</h3></Link>
            </div>
            <div className='box4'>
              <h2 className='text'>Deals on smart watches</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" className='pc'></img>
              <Link to="/watch"><h3 className='shopnow'> Shop now</h3></Link>
              </div>
          </div>
        
       
          <div className='boxes'>
            <div className='box5'>
              <h2 className='text'>Every thing for your home</h2>
              <img src="https://images-fe.ssl-images-amazon.com/images/G/35/gateway/Discover/discoverbed_379x304_2._SY304_CB429791174_.jpg" className='pc'></img>
              <Link to="/kitchen"><h3 className='shopnow' /*onClick={everything}*/> Shop now</h3></Link>
              </div>
            <div className='box6'>
              <h2 className='text'>Baby Essentials</h2>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg" className='pc'></img>              
              <Link to="/fashion"><h3 className='shopnow'> Shop now</h3></Link>
              </div>
            <div className='box7'>
              <h2 className='text'>Shop pantry</h2>
              <img src="https://images-fe.ssl-images-amazon.com/images/G/35/Consumables/2020/Grocery/pantry2_379x304._SY304_CB435011192_.jpg" className='pc'></img>
              <Link to="/pantry"><h3 className='shopnow'> Shop now</h3></Link>
              </div>
            <div className='box8'>
              <h2 className='text'>WALLe Fashion</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2023/img/Events/XCM_CUTTLE_1623895_3381342_379x304_1X_en_CA._SY304_CB597323048_.jpg" className='pc'></img>
              <Link to="/fashion"><h3 className='shopnow'> Shop now</h3></Link>
              </div>
          </div>

          
        </div>
        <div className='body2'>

        </div>
        <div className='body3'>
          <p className='smartad'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <br></br>
          <div className='click'>
          <Link to="/mobile"><button className='me'>Shop Now</button></Link>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </p>
          
          <div className='check-home'>
            
           <div className='popular'>
            <h2 className='ps'>Popular searches</h2>
            <br></br>
            <div className='imgs'>
            <img src="https://m.media-amazon.com/images/I/415N3L8jVvL._AC_SY200_.jpg" className='popimg'></img>
            <img src="https://m.media-amazon.com/images/I/81Vekenn4lL._AC_SY200_.jpg"className='popimg'></img>
            <img src="https://m.media-amazon.com/images/I/91MvyMn3UpL._AC_SY200_.jpg"className='popimg'></img>
            <img src="https://m.media-amazon.com/images/I/71CmEDQIn-S._AC_SY200_.jpg"className='popimg'></img>
            <img src="https://m.media-amazon.com/images/I/81Q1KUdpwJL._AC_SY200_.jpg"className='popimg'></img>
            <img src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._AC_SY200_.jpg"className='popimg'></img>
            </div>
           </div>
          </div>
          </div>
          <Footer/>
        </div>
    
  )
};
export default Home;