import { Link } from "react-router-dom";
import styled from "styled-components";
import useAxios from "../useAxios";
import PetPicture from "../assets/PetPicture.png";
import defaultAvatar from "../assets/DefaultAvatar.png";
import { useParams } from "react-router-dom";
import Heading from "../components/Heading";
import City from "../components/City";
import { FaPaw, FaVenusMars } from "react-icons/fa";
import { TbMapPin } from "react-icons/Tb";

const StyledArticle = styled.article`
  background-color: #57419d;
  width: 101vw;
  height: 670px;
`;

const StyledPaw = styled(FaPaw)`
  color: yellow;
`;

const StyledGender = styled(FaVenusMars)`
  color: #ff8893;
`;

const StyledTbMapPin = styled(TbMapPin)`
  color: #5533ea;
`;

const StyledDiv = styled.div`
  background-color: #f5f5fa;
  width: 100vw;
  border-radius: 30px;
`;

const StyledTypes = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 20px;
`;

const StyledText = styled.p`
  margin-left: 15px;
  width: 340px;
  text-align: left;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
`;

const StyledBackgroundButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #e0e0e0;
  box-shadow: 17px 17px 43px #868686, -17px -17px 43px #ffffff;
`;

const StyledAnimalBackgroundButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  background: #e0e0e0;
  box-shadow: 17px 17px 43px #868686, -17px -17px 43px #ffffff;
`;

const StyledAnimalButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;
  margin-bottom: 30px;
`;

const StyledImg = styled.img`
  width: 90vw;
  height: 320px;
  display: flex;
  margin: auto;
  border-radius: 25px;
`;

const StyledAnimalImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  height: 44px;
  width: 90vw;
  border-radius: 50px;
  border: none;
  background-color: #57419d;
  color: #ffffff;
`;

const DetailsView = ({}) => {
  let { id } = useParams();
  const [data, error, loading] = useAxios(id);
  return (
    <>
      {error && <p>Der opstod en fejl...</p>}
      {loading && <p>loading...</p>}
      {data && (
        <>
          <StyledArticle key="id">
            <div className="Flex">
              <StyledImg
                src={
                  data.animal.photos.length > 0
                    ? data.animal.photos[0].full
                    : defaultAvatar
                }
                alt=""
              />
            </div>
            <StyledDiv>
              <StyledHeader>
                <Heading
                  title={data && data.animal.name}
                  size="24"
                  weight="900"
                  as="h2"
                ></Heading>
                <div className="Flex margin-right">
                  <p className="margin-right-xs">
                    <StyledTbMapPin></StyledTbMapPin>
                  </p>
                  <p>{data && data.animal.contact.address.city}</p>
                </div>
              </StyledHeader>

              <StyledTypes>
                <div className="Flex Center">
                  <StyledBackgroundButton className="margin-right-s">
                    <StyledPaw />
                  </StyledBackgroundButton>
                  <p className="max-width">
                    {data && data.animal.breeds.primary}{" "}
                  </p>
                </div>
                <div className="Flex Center">
                  <StyledBackgroundButton className="margin-right-s">
                    <StyledGender />
                  </StyledBackgroundButton>
                  <p>{data && data.animal.gender} </p>
                </div>
              </StyledTypes>
              <StyledText>
                {data && data.animal.description}{" "}
                <span className="Blue">More</span>
              </StyledText>
              <StyledAnimalButtons>
                <StyledAnimalBackgroundButton>
                  <StyledAnimalImg
                    src={
                      data.animal.photos.length > 1
                        ? data.animal.photos[1].small
                        : defaultAvatar
                    }
                    alt=""
                  />
                </StyledAnimalBackgroundButton>
                <StyledAnimalBackgroundButton>
                  <StyledAnimalImg
                    src={
                      data.animal.photos.length > 2
                        ? data.animal.photos[2].small
                        : defaultAvatar
                    }
                    alt=""
                  />
                </StyledAnimalBackgroundButton>
                <StyledAnimalBackgroundButton>
                  <StyledAnimalImg
                    src={
                      data.animal.photos.length > 3
                        ? data.animal.photos[3].small
                        : defaultAvatar
                    }
                    alt=""
                  />
                </StyledAnimalBackgroundButton>
              </StyledAnimalButtons>
              <Link to="/List">
                <StyledButton>Back</StyledButton>
              </Link>
            </StyledDiv>
          </StyledArticle>
        </>
      )}
    </>
  );
};

export default DetailsView;
