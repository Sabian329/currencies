import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const LoginButtons = () => {
  return (
    <Wrapper>
      <Button colorScheme="none">Sign in</Button>
      <Button colorScheme="teal">Register</Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #861111;
  height: 5rem;
  position: absolute;
  right: 0;
  padding: 0 1rem;
`;
