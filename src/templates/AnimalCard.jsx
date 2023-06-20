import styled from "styled-components";
import Heading from "../components/Heading";
import City from "../components/City";
import PetPicture from "../assets/PetPicture.png";
import defaultAvatar from "../assets/DefaultAvatar.png";
import { TbMapPin } from "react-icons/Tb";
import { AiOutlineHeart } from "react-icons/Ai";
import useAxios from "../useAxios";
import FavButton from "../components/FavoriteButton";
import { Link, useOutletContext } from "react-router-dom";

const StyledAiOutlineHeart = styled(AiOutlineHeart)`
  grid-column-start: 3;
  margin-top: 12px;
`;

const StyledP = styled.p`
  font-size: 15px;
`;

const StyledDiv = styled.div`
  height: 30px;
  width: 150px;
  grid-column-start: 2;
  grid-column-end: 3;
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
  display: grid;
  grid-template-columns: 124px 1fr 45px;
`;

const StyledImg = styled.img`
  min-width: 124px;
  height: 124px;
  border-radius: 25px;
  margin-right: 5px;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const AnimalCard = () => {
  const [data, error, loading] = useAxios();
  return (
    <>
      {error && <p>Der opstod en fejl...</p>}
      {loading && <p>loading...</p>}
      {data && (
        <>
          {console.log(data)}
          {data.animals.map((animal) => (
            <StyledArticle key={animal.id}>
              <Link to={`/detailview/${animal.id}`} key={animal.id}>
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
                    <StyledDiv className="Flex Center space-between">
                      <Heading
                        className="text-align-start "
                        title={
                          animal.name.length > 5
                            ? animal.name.split(" ").slice(0, 3).join(" ")
                            : animal.name
                        }
                        size="20"
                        weight="900"
                        as="h2"
                      ></Heading>
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
              </Link>
              <FavButton />
              {/* {<StyledAiOutlineHeart />} */}
            </StyledArticle>
          ))}
        </>
      )}
    </>
  );
};

export default AnimalCard;
