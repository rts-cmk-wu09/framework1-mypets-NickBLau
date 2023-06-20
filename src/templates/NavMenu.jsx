import styled from "styled-components";
// import NavButton from "../components/Navbutton";
import Profilepic from "../assets/Profilepic.png";
import { BsHouseDoor } from "react-icons/Bs";
import { BsChat } from "react-icons/Bs";
import { BsPerson } from "react-icons/Bs";
import { AiOutlineHeart } from "react-icons/Ai";
import { Link } from "react-router-dom";

const StyledBsHouseDoor = styled(BsHouseDoor)`
  color: #57419d;
  cursor: pointer;
`;
const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #e0e0e0;
  box-shadow: 17px 17px 43px #868686, -17px -17px 43px #ffffff;
`;

const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 115px;
  box-sizing: border-box;
  gap: 35px;
  border-top-left-radius: 15%;
  border-top-right-radius: 15%;
  background-color: #f5f5fa;
`;

const navMenu = () => {
  return (
    <StyledNav className="Flex Center">
      <Link to="/">
        <StyledButton>
          <StyledBsHouseDoor />
        </StyledButton>
      </Link>
      <StyledButton>
        <BsChat />
      </StyledButton>
      <StyledButton>
        <AiOutlineHeart />
      </StyledButton>
      <StyledButton>
        <BsPerson />
      </StyledButton>
    </StyledNav>
  );
};

export default navMenu;
