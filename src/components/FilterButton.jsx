import styled, { css } from "styled-components";

const StyledButton = styled.button`
  height: 32px;
  width: 72px;
  background-color: #f5f5fa;
  color: #7878ab;
  border-radius: 81px;
  border: none;
  background: #40000000;
  box-shadow: 22px 22px 44px #bebebe, -22px -22px 44px #ffffff;
`;

const FilterButton = (props) => {
  return <StyledButton>{props.title}</StyledButton>;
};

export default FilterButton;
