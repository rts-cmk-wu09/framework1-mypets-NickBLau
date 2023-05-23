import styled from "styled-components";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #e0e0e0;
  box-shadow: 17px 17px 43px #868686, -17px -17px 43px #ffffff;
`;

const NavButton = () => {
  return <StyledButton></StyledButton>;
};

export default NavButton;
