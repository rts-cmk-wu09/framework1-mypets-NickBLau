import styled from "styled-components";
import NavButton from "../components/Navbutton";
import Profilepic from "../assets/Profilepic.png";
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
      <NavButton>
        <img src={Profilepic} alt="" srcset="" />
      </NavButton>
      <NavButton></NavButton>
      <NavButton></NavButton>
      <NavButton></NavButton>
    </StyledNav>
  );
};

export default navMenu;
<nav></nav>;
