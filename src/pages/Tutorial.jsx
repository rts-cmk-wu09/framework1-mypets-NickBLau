import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Link } from "react-router-dom";
import Animal from "../assets/Animal.png";
import styled from "styled-components";
import Heading from "../components/Heading";
import Oval from "../assets/Oval.svg";
import Rectangle from "../assets/Rectangle.svg";

const StyledP = styled.p`
  font-size: 16px;
  color: #828282;
`;

const StyledButton = styled.button`
  height: 44px;
  width: 327px;
  border-radius: 50px;
  border: none;
  background-color: #57419d;
  color: #ffffff;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  cursor: pointer;
`;
const Tutorial = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => ""}
        onSwiper={(swiper) => ""}
      >
        <SwiperSlide className="Grab">
          {" "}
          <img src={Animal} alt="  " />
          <Heading title={"My Pets"} size="20" weight="900" as="h1" />
          <StyledP>
            Taking care of a pet is my favorite, it helps me to gamir stress and
            fatiuge
          </StyledP>
          <StyledP>1/4 </StyledP>
          <div className="Flex Center margin-bottom">
            <img src={Rectangle} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
          </div>
          <Link to="/List">
            <StyledButton>Skip</StyledButton>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Grab">
          {" "}
          <img src={Animal} alt="  " />
          <Heading title={"My Pets"} size="20" weight="900" as="h1" />
          <StyledP>
            Taking care of a pet is my favorite, it helps me to gamir stress and
            fatiuge
          </StyledP>
          <StyledP>2/4 </StyledP>
          <div className="Flex Center margin-bottom">
            <img className="Oval" src={Oval} alt="  " />
            <img src={Rectangle} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
          </div>
          <Link to="/List">
            <StyledButton>Skip</StyledButton>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Grab">
          {" "}
          <img src={Animal} alt="  " />
          <Heading title={"My Pets"} size="20" weight="900" as="h1" />
          <StyledP>
            Taking care of a pet is my favorite, it helps me to gamir stress and
            fatiuge
          </StyledP>
          <StyledP>3/4 </StyledP>
          <div className="Flex Center margin-bottom">
            <img className="Oval" src={Oval} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
            <img src={Rectangle} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
          </div>
          <Link to="/List">
            <StyledButton>Skip</StyledButton>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Grab">
          {" "}
          <img src={Animal} alt="  " />
          <Heading title={"My Pets"} size="20" weight="900" as="h1" />
          <StyledP>
            Taking care of a pet is my favorite, it helps me to gamir stress and
            fatiuge
          </StyledP>
          <StyledP>4/4 </StyledP>
          <div className="Flex Center margin-bottom">
            <img className="Oval" src={Oval} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
            <img className="Oval" src={Oval} alt="  " />
            <img src={Rectangle} alt="  " />
          </div>
          <Link to="/List">
            <StyledButton>Got it</StyledButton>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Tutorial;
