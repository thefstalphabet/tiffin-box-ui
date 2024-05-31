import styled from "styled-components";
import { textGray } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  margin: 5rem 3rem;
  display: grid;
  gap: 5rem;
  h1 {
    align-self: center;
    text-align: center;
    font-size: 2rem;
  }
`;
export const ItemCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  justify-content: center;
  text-align: center;
  .item{
    display: grid;
    gap: 0.5rem;
    align-items: center;
    justify-items: center;
    .content{
      display: grid;
      gap: 0.5rem;
      p{
        color: ${textGray};
      }
    }
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
