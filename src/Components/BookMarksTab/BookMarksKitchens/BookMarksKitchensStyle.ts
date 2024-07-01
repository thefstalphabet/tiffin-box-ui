import styled from "styled-components";
import { primaryColor } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  .card {
    width: 15rem;
  }
  .rating {
    display: flex;
    background-color: ${primaryColor};
    border: 2px solid white;
    border-radius: 5px;
    width: 4vw;
    align-self: center;
    justify-content: center;
    align-items: center;
    h3 {
      color: white;
    }
  }
`;
