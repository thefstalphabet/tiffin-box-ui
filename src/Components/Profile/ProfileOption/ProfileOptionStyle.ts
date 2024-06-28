import styled from "styled-components";
import { bgGray } from "../../../Configs/GlobalColour";
export const Container = styled.div`
  display: flex;
  height: 80vh;
  /* width: 90vw; */
  /* gap: 1rem; */
  margin-top: 1.5rem;
  background-color: white;
  /* margin: auto; */

  .re-menu{
    width: 12rem;
    min-width: 12rem;
    height: 100%;
  }

  /* .remenu_item {
    display: flex;
    width: 30vw;
    background-color: red;

    .re-menu-item {
      text-decoration: none;
      cursor: pointer;
    }
  } */

  /* .active-data {
    display: flex;
  } */

  /* .menu-buttons { */
    /* display: flex; */
    /* flex-direction: column; */
  /* } */

  .menu-item-container {
    flex-grow: 2;
    background-color: ${bgGray};
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

    /* .component-container {
    flex: 4;
    padding: 20px;
    overflow-y: auto; 
    height: 70vh;

  } */

  /* .scrollable-container {
    max-height: 500px; 
  } */

    /* .remenu_item {
      width: 100%;
    } */

    /* .menu-buttons {
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: 0;
      justify-content: center;
    } */
  }
`;