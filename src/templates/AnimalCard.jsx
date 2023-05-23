import styled from "styled-components";
import Heading from "../components/Heading";
import City from "../components/City";
import PetPicture from "../assets/PetPicture.png";
import { TbMapPin } from "react-icons/Tb";
import { AiOutlineHeart } from "react-icons/Ai";

const StyledAiOutlineHeart = styled(AiOutlineHeart)`
  margin-right: 10px;
`;
const StyledDiv = styled.div`
  height: 30px;
`;

const StyledTbMapPin = styled(TbMapPin)`
  color: #5533ea;
`;

const StyledArticle = styled.article`
  width: 327px;
  height: 130px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 25px;
  background-color: #f5f5fa;
  border-radius: 20px;
  box-shadow: 20px 20px 40px #bebebe, -20px -20px 40px #ffffff;
`;

const StyledImg = styled.img`
  width: 124px;
  height: 124px;
`;

const AnimalCard = () => {
  return (
    <>
      <StyledArticle>
        <div className="Flex Center flex-start">
          <StyledImg src={PetPicture} alt="" />
          <div>
            <StyledDiv className="Flex Center space-between align-start">
              <Heading
                title={"Greyhound"}
                size="20"
                weight="900"
                as="h2"
              ></Heading>
              <StyledAiOutlineHeart />
            </StyledDiv>
            <StyledDiv className="Flex Center flex-start">
              <StyledTbMapPin />
              <City />
            </StyledDiv>
            <p className="text-align-start">
              Taking care of a pet is my favorite, it helps me to...
            </p>
          </div>
        </div>
      </StyledArticle>
    </>
  );
};

export default AnimalCard;
