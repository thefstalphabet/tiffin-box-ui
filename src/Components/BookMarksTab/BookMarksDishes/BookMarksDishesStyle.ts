import styled from "styled-components";
import { primaryColor } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  /* .cards { */
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    .card {
      width: 18rem;
    }
    .header{
      display: flex;
      justify-content: space-between;
    }
    /* .rating {
      display: flex;
      background-color: ${primaryColor};
      border: 2px solid white;
      border-radius: 5px;
      width: 4vw;
      align-self: center;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 15vw;
      }
      h3 {
        color: white;
      }
    } */
  /* } */
`;
