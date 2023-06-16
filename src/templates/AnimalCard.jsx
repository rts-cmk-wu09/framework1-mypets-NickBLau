import styled from "styled-components";
import Heading from "../components/Heading";
import City from "../components/City";
import PetPicture from "../assets/PetPicture.png";
import defaultAvatar from "../assets/DefaultAvatar.png";
import { TbMapPin } from "react-icons/Tb";
import { AiOutlineHeart } from "react-icons/Ai";
import useAxios from "../useAxios";
import { Link, useOutletContext } from "react-router-dom";

const StyledAiOutlineHeart = styled(AiOutlineHeart)`
  margin-right: 10px;
`;

const StyledP = styled.p`
  font-size: 15px;
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
  border-radius: 25px;
  margin-right: 5px;
`;

const AnimalCard = () => {
  const [data, error, loading] = useAxios("id");
  return (
    <>
      {error && <p>Der opstod en fejl...</p>}
      {loading && <p>loading...</p>}
      {data && (
        <>
          {console.log(data)}
          {data.animals.map((animal) => (
            <Link to={`/detailview/${animal.id}`} key={animal.id}>
              <StyledArticle>
                <div className="Flex Center flex-start">
                  <StyledImg
                    src={
                      animal.photos.length > 0
                        ? animal.photos[0].full
                        : defaultAvatar
                    }
                    alt=""
                  />
                  <div>
                    <StyledDiv className="Flex Center space-between align-start">
                      <Heading
                        className="flex-start"
                        title={
                          animal.name.length > 5
                            ? animal.name.split(" ").slice(0, 3).join(" ")
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
                    <div className="text-align-start">
                      <p>
                        {animal.size} {animal.gender} {animal.species}
                      </p>
                    </div>
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
