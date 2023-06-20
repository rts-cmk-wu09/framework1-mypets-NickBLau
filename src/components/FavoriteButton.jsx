import { styled } from "styled-components";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/Ai";

const StyledHeart = styled(AiFillHeart)`
  color: red;
`;

const StyledButton = styled.button`
  border-radius: 15px;
  border: 0px solid gray;
  width: 30px;
  height: 30px;
  box-shadow: 20px 20px 40px #bebebe, -20px -20px 40px #ffffff;
  grid-column-start: 3;
  margin-left: 6px;
  margin-top: 12px;
  cursor: pointer;
`;

const FavButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setLiked(!liked)}>
        <div className="Flex Center">
          {liked ? <StyledHeart /> : <AiOutlineHeart />}
        </div>
      </StyledButton>
    </>
  );
};

export default FavButton;
