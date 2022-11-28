import React from 'react'
import "./Banner.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Banner = () => {
  return (
    <div id="carouselExampleControls" style={{height:"302px"}} className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner" style={{height:"302px"}}>
      <div className="carousel-item active">
        <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/BAU/Gardening_essentials/v1/HK_1500x600_PC._CB630308575_.jpg" alt="..." />
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Primeday/Peripherals/Hero/CEPC_Electronics_GW_Graphics_PD22_3000x1200._CB631920845_.jpg" alt="..." />
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/PD22/Graphics/Hero/Coupon/New_Coupon/3000x1200_2._CB631814908_.jpg" alt="..." />
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/AugART22/D50354751_IN_HETV_PD_GW_LATV_PC_Hero_3000x1200_5._CB631825907_.jpg"  alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
      <ArrowBackIosIcon style={{color:"black"}}></ArrowBackIosIcon>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
      <ArrowForwardIosIcon style={{color:"black"}}></ArrowForwardIosIcon>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Banner;