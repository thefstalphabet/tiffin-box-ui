import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;
  height: 90vh;
  /* padding: 20px; */
  box-sizing: border-box;
  img {
    max-width: 36%;
    height: auto;
    align-items: center;
  }
  @media (max-width: 480px) {
    width: 100vw;
    padding: 10px;
    img {
      max-width: 90%;
      height: auto;
      align-items: center;
    }
  }
`;
