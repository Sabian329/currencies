import styled from "styled-components";
import { LoginButtons } from "./LoginButtons";

export const Header = () => {
  return (
    <Wrapper>
      <Title>Currencies</Title>
      <LoginButtons />
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #57626e;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dadada;
  height: 5rem;
  position: relative;
`;
