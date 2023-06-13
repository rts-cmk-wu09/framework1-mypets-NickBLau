import styled from "styled-components";
import Heading from "../components/Heading";
import City from "../components/City";
import PetPicture from "../assets/PetPicture.png";
import { TbMapPin } from "react-icons/Tb";
import { AiOutlineHeart } from "react-icons/Ai";
import useAxios from "../useAxios";
import { Link, useOutletContext } from "react-router-dom";

const StyledAiOutlineHeart = styled(AiOutlineHeart)`
  margin-right: 10px;
`;
const StyledDiv = styled.div`
  height: 30px;
  width: 180px;
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
  const [data, error, loading] = useAxios("animals");
  return (
    <>
      {error && <p>Der opstod en fejl...</p>}
      {loading && <p>loading...</p>}
      {data && (
        <>
          {console.log(data)}
          {data.animals.map((animal) => (
            <Link to={`detailview/${animal.id}`} key={animal.id}>
              <StyledArticle>
                <div className="Flex Center flex-start">
                  <StyledImg src={PetPicture} alt="" />
                  <div>
                    <StyledDiv className="Flex Center space-between align-start">
                      <Heading
                        className="flex-start"
                        title={
                          animal.name > 3
                            ? animal.name.slice(0, 3).join(" ") + "..."
                            : animal.name
                        }
                        size="20"
                        weight="900"
                        as="h2"
                      ></Heading>
                      <StyledAiOutlineHeart className="postion-end margin-left" />
                    </StyledDiv>
                    <StyledDiv className="Flex Center flex-start">
                      <StyledTbMapPin />
                      <p>{animal.contact.address.city}</p>
                    </StyledDiv>
                    <p className="text-align-start">
                      {animal.size} {animal.species}
                    </p>
                  </div>
                </div>
              </StyledArticle>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default AnimalCard;
