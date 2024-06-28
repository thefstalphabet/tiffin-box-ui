import styled from "styled-components";
import { bgDarkGray } from "../../Configs/GlobalColour";
export const Container = styled.div`
  height: 100%;
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    .card{
      width: 15rem;
    }
  }
  .plus-card {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    cursor: pointer;
    .plus-icon{
      font-size: 3rem;
      color: ${bgDarkGray};
    }
  }
`;
