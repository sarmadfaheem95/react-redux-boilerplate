import styled from "styled-components";

const ControlContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => {
    return theme.colors.primary;
  }};
`;
export default function Header() {
  return (
    <ControlContainer>
      <p>Header</p>
    </ControlContainer>
  );
}
