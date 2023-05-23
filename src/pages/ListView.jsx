import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { TbMapPinFilled } from "react-icons/Tb";
import { SlBell } from "react-icons/Sl";
import { MdKeyboardArrowDown } from "react-icons/Md";
import Profilepic from "../assets/Profilepic.png";
import FilterButton from "../components/FilterButton";
import City from "../components/City";
import AnimalCard from "../templates/AnimalCard";
import NavMenu from "../templates/NavMenu";

const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

const StyledProfilCircle = styled.div`
  height: 42px;
  width: 44px;
  border-radius: 20px;
  background-color: aqua;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const StyledTbMapPinFilled = styled(TbMapPinFilled)`
  color: #57419d;
`;

const StyledSlBell = styled(SlBell)`
  color: #57419d;
`;

const StyledMdKeyboardArrowDown = styled(MdKeyboardArrowDown)`
  color: #57419d;
`;
const ListView = () => {
  return (
    <>
      <div className="Flex Center space-between">
        <div className=" Flex Center space-around">
          <StyledProfilCircle>
            <StyledImg src={Profilepic} alt="  " />
          </StyledProfilCircle>
          <StyledTbMapPinFilled />
          <City></City>
          <StyledMdKeyboardArrowDown />
        </div>
        <StyledSlBell />
      </div>
      <StyledNav>
        <FilterButton title={"Cats"}></FilterButton>
        <FilterButton title={"Dogs"}></FilterButton>
        <FilterButton title={"Birds"}></FilterButton>
        <FilterButton title={"Other"}></FilterButton>
      </StyledNav>

      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
      <br />
      <br />
      <br />
      <br />
      <NavMenu></NavMenu>
      <Link to="/">
        <button>skip</button>
      </Link>
    </>
  );
};

export default ListView;
