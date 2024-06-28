import styled from "styled-components";
import { bgDarkGray } from "../../Configs/GlobalColour";
export const Container = styled.div`
  height: 100%;
  padding: 0.5rem;
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    .card{
      width: 15rem;
    }
    .plus-card {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .plus-icon{
        font-size: 3rem;
        color: ${bgDarkGray};
      }
    }
  }
`;
