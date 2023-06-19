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

const StyledProfilCircle = styled.div`
  height: 45px;
  width: 46px;
  border-radius: 20px;
  background-color: #f5f5fa;
  border: none;
  background: #e0e0e0;
  box-shadow: 17px 17px 43px #868686, -17px -17px 43px #ffffff;
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
      <div className="padding">
        <div className="Flex Center space-between">
          <div className=" Flex Center space-around">
            <StyledProfilCircle>
              <StyledImg src={Profilepic} alt="  " />
            </StyledProfilCircle>
            <StyledTbMapPinFilled />
            <p>New york city</p>
            <StyledMdKeyboardArrowDown />
          </div>
          <StyledButton>
            <StyledSlBell />
          </StyledButton>
        </div>
        <StyledNav>
          <FilterButton title={"Cats"}></FilterButton>
          <FilterButton title={"Dogs"}></FilterButton>
          <FilterButton title={"Birds"}></FilterButton>
          <FilterButton title={"Other"}></FilterButton>
        </StyledNav>
        <AnimalCard></AnimalCard>

        <NavMenu></NavMenu>
      </div>
    </>
  );
};

export default ListView;
