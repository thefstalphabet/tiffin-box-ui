import styled from "styled-components";
import { bgGray } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  display: flex;
  height: 80vh;
  margin-top: 1.5rem;
  background-color: white;

  .re-menu{
    width: 12rem;
    min-width: 12rem;
    height: 100%;
  }

  .menu-item-container {
    flex-grow: 2;
    background-color: ${bgGray};
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 90vw;
    gap: 0;
    margin: 0 auto;
    height: 100vh;
    .re-menu{
      width: 100%;
      height: 100%;
    }
    .menu-item-container{
      display: none;
    }
  }
`;