import styled from "styled-components";
import useAxios from "../useAxios";
import { TbMapPin } from "react-icons/Tb";

const StyledDiv = styled.div`
  height: 30px;
  width: 180px;
`;

const StyledTbMapPin = styled(TbMapPin)`
  color: #5533ea;
`;

const City = () => {
  const [data, error, loading] = useAxios("id");
  return (
    <>
      {error && <p>Der opstod en fejl...</p>}
      {loading && <p>loading...</p>}
      {data && (
        <>
          {data.animals.map((animal) => (
            <div className="Flex Center flex-start">
              <StyledTbMapPin />
              <p>{animal.contact.address.city}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default City;
