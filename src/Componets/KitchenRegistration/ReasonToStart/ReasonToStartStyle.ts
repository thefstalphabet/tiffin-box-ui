import styled from "styled-components";
import { textGray } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  margin-top: 12vh;
  margin-bottom: 12vh;
  .reason-text {
    align-self: center;
    text-align: center;
    font-size: 2.5rem;
  }
`;
export const itemCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  margin-left: 3rem;
  margin-right: 3rem;
  .icon-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 2rem;
  }
  .reason-heading {
    text-align: center;
    align-items: center;
    font-size: 2rem;
  }
  .reason-desc {
    text-align: center;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${textGray};

  }
  @media screen and (min-width: 100px) {
    grid-template-columns: repeat(1, 1fr); 
    align-self: center;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
